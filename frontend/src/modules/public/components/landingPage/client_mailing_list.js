import React, { Component } from 'react';
import { reset, Field, reduxForm } from 'redux-form';
import validate from './client_mailing_list_validation';
import RenderFields from './../../../../components/reduxFormFields/render_fields';
import { toast } from 'react-toastify'; // ToastContainer
import '../../../../scss/custom/LandingPage.css'

class ClientMailingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formComplete: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.handleSubmit(e)
        this.setState({
            formComplete: true
        })
    }

    render() {
        const { pristine, submitting } = this.props; 

        return (
            
            <div className= "m-auto color4 h-100" style= {{position: "absolute"}}>
                <div className= "row no-gutter align-items-end m-auto"  style= {{minHeight: "100%"}}>
                <div className="col-10 no-gutter align-self-center mx-auto" >
                <div className="row no-gutter align-middle vcenter">
                    
                    <div className="col-12 col-md-6 no-gutter pb-5"> 
                        <div className="row no-gutter pb-5">
                        <div className="col-10 no-gutter">
                            <h1 id= "LOOKING_FOR_CARE">Looking for care?</h1>
                        </div>     
                        </div>
                        <div className="row no-gutter">
                        <div className="col-10 no-gutter">
                            <h3>Whether it is support with day-to-day living or slightly more hands-on care you’re 
                                looking for, we aim to help everybody get the very most from their later years. 
                                We know needs vary, so we adapt our care to every single person’s way of life.
                            </h3>
                        </div>
                        </div>  
                    </div>
                    
                    <div className="col-12 col-md-6 no-gutter justify-content-center mx-auto text-sm-left">
                        <div >
                        {!this.state.formComplete && (
                            <form className= "enquiry-form">
                            <h3 className="text-right">Care enquiry form</h3>
                            <div className="pb-2">
                                <Field name="name" type="text" id="name" className="form-control" component={RenderFields} label="Your name" />
                            </div>   
                            <div className="pb-2">
                                <Field name="careIsFor" type="text" id="name" className="form-control" component={RenderFields} label="Who is care for?" />
                            </div>   
                            <div className="pb-5">
                                <Field name="contactEmail" type="text" id="name" className="form-control" component={RenderFields} label="Contact email" />
                            </div> 
                            <div className="text-left">
                                <button type="button"  disabled={pristine || submitting} onClick={(e)=> this.handleClick(e)} className="align-middle btn btn-next white py-3 text-right">Submit</button>
                            </div> 
                            </form>
                        )}
                        {this.state.formComplete && (
                            <div className= "enquiry-form" style={{minHeight: "268px"}}>
                                <h3 className="text-right">Care enquiry form</h3>
                                <div className= "row no-gutter row align-items-center">
                                <div className= "col no-gutter">
                                <div className= "row no-gutter">
                                    <h3 className="pt-5">Thanks you for registering your interest with edyn.care.</h3>
                                </div>
                                <div className= "row no-gutter">
                                    <h3 className="pt-1">We'll be in touch shortly.</h3>
                                </div>
                                <div className= "row no-gutter">
                                    <h3 className="pt-1">- Oliver, edyn.care</h3>
                                </div>
                                </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

const onSubmit = async (values, dispatch, {nextPage}) => {
    await fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'client/mailinglist', {
        method: "POST",
        body: JSON.stringify(values, null, 2),
    }).then(function (response) {
        if (response.status === 200) {
            response.json().then(json => {
                dispatch(reset('client-mailing-list'));
            });
        }
    }, function (error) {
        toast.error("Something went wrong, pls try again", {
            position: toast.POSITION.TOP_RIGHT
        });
    })
};

const afterSubmit = (result, dispatch) =>
   dispatch(reset('client-mailing-list'));

export default reduxForm({
    form: 'client-mailing-list',
    validate,
    onSubmit,
    onSubmitSuccess: afterSubmit
})(ClientMailingList)  
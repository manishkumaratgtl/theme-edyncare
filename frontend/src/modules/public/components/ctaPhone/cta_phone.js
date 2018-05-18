import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submitCTAPhone } from '../../../actions/CTAPhone';

import CTAPhoneForm from "./CTAPhoneForm";
import CTAPhoneConfirmation from "./CTAPhoneConfirmation";


class CTAPhone extends Component {
    
    constructor(props){
		super(props)
        this.state= {
            formComplete: {
                CTAPhoneYourName: "",
                CTAPhoneCareFor: "",
                CTAPhoneYourEmail: "",
                CTAPhoneYourPhone: ""
            }
        }
        this.onSubmit= this.onSubmit.bind(this)
    };

    componentDidMount(props){
    };

    onSubmit= (event)=> {
        let nextformComplete= Object.assign({}, ...this.state.formComplete);

        nextformComplete= event.formComplete;
        this.setState({
            formComplete: nextformComplete
        })
        this.props.submitCTAPhone()
    }

    render(){
        let { isCTASuccess }= this.props;

        return (
            <div>
                {/*{isCTASuccess && <div>From complete</div>}
                {!isCTASuccess && <div>Form incomplete</div>}*/}

                <h2 className="text-center p-4">Request a consulation</h2>
                <div className="row">
                    <div className="col-sm-6 p-2">
                        <h3 className="text-center p-4" >Call us on: <br/><a href="tel:+0800123456"><strong>0800 123 456</strong></a></h3>
                    </div>
                    <div className="col-sm-6 p-2">
                        <h3 className="text-center p-4">
                            {!isCTASuccess && <CTAPhoneForm onSubmit= { this.onSubmit }/>}
                            {isCTASuccess && <CTAPhoneConfirmation formComplete= { this.state.formComplete } />}
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps= (state)=> {
    return {
        isCTASuccess: state.CTAPhone.isCTASuccess
    }
}

const mapDispatchToProps= (dispatch)=> {
    return {
        submitCTAPhone: ()=> dispatch(submitCTAPhone())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(CTAPhone)
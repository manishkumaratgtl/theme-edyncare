import React, { Component } from 'react';
import { reset, Field, reduxForm } from 'redux-form';
import RenderFields from '../../../../components/reduxFormFields/render_fields';
import { Values } from 'redux-form-website-template';

class CreateAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){

    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
        <form className="onboarding-form" onSubmit={handleSubmit}>

            <div className="form-group col no-gutter">
                <Field name="name.firstName" type="text" className="form-control" component={RenderFields} label="First name" />
            </div>

            <div className="form-group col no-gutter">
                <Field name="name.surname" type="text" className="form-control" component={RenderFields} label="Surname" />
            </div>

            <div className="form-group col no-gutter">
                <Field name="Email" type="text" className="form-control" component={RenderFields} label="Email" />
            </div>

            <div className="row no-gutter justify-content-between pt-5">
                <div className="col no-gutter text-left">
                    <button type="submit" disabled={pristine || submitting} className="align-middle btn btn-next white py-3">Submit</button>
                </div>
                <div className="col no-gutter text-right">
                    <button type="button" disabled={pristine || submitting} onClick={reset} className="align-middle btn btn-next white py-3">Clear Values</button>
                </div>
            </div> 
            <Values form= 'create-admin'/>
        </form>
        );
    }
}


const onSubmit = async (values, dispatch ) => {
    await fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'admin', {
        method: "POST",
        body: JSON.stringify(values, null, 2),
    }).then(function (response) {
        if (response.status === 200) {
            response.json().then(json => {
                dispatch(reset('create-admin'));
                return ;
            });
        }else if(response.status === 409){
            console.log(response);
            return ;
        }
    }, function (error) {
        console.log(error);
        return ;
    })
};

export default reduxForm({
    form: 'create-admin',      // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    //validate,
    onSubmit
})(CreateAdmin)  
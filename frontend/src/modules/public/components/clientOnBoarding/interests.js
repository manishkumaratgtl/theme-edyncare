import React from 'react';
import { Field, reduxForm } from 'redux-form'
import CheckboxGroup from '../../../../components/reduxFormFields/checkbox_group';
import validate from './client_on_boarding_validation';

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span style={{
        width: "100%",
        marginTop: ".25rem",
        marginLeft: ".25rem",
        fontSize: "80%",
        color: "#FF9999"
    }}>{error}</span> : false;

const bootstrapParser = ({ input, label }) => (
    <label className="radio-container no-gutter btn btn-outline-secondary btn-sm m-2" style={{ minWidth: "170px" }}>
        <input type="checkbox" {...input} />
        <span className="checkmark"> {label}</span>
    </label>
);

let optionsInterests = [
    { label: 'Antiques', value: 'Antiques' },
    { label: 'Art', value: 'Art' },
    { label: 'Cooking', value: 'Cooking' },
    { label: 'Dancing', value: 'Dancing' },
    { label: 'Exercise', value: 'Exercise' },
    { label: 'Film', value: 'Film' },
    { label: 'Food', value: 'Food' },
    { label: 'Music', value: 'Music' },
    { label: 'Politics', value: 'Politics' },
    { label: 'Reading', value: 'Reading' },
    { label: 'Spirtuality', value: 'Spirtuality' },
    { label: 'Sport', value: 'Sport' },
    { label: 'Travelling', value: 'Travelling' },
    { label: 'None', value: 'None' },
];


var Interests = (props) =>  {
        const { handleSubmit, previousPage } = props; // , DBSValue
        return(
                <form className="onboarding-form" onSubmit={handleSubmit}>
                    <div className="row no-gutter justify-content-center">
                        <div className="col-md-8 no-gutter justify-content-center onboarding_form color0" >
                        <h2 className= "bold pb-4">Your interests</h2>
                        <div className= "row no-gutter pb-4">
                            <div className= "col justify-content-center text-center no-gutter">
                                <h2>This will help us create a harmonius realtionship between you and carers with simular interest to you.</h2>
                                <h2>Having common ground is key.</h2>
                            </div>
                        </div>
                        <div className= "row no-gutter justify-content-around text-center pb-5">
                            <h2 className= "pb-4">Please select your interests</h2>
                            <div className= "col-11 no-gutter">
                                <div className="form-group col-md-12 text-center">
                                    <CheckboxGroup component={bootstrapParser} options={optionsInterests} name="recipient.interests" />
                                </div>
                                <Field name="interests" component={renderError} className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="col no-gutter pb-4">
                            <h3 className="pb-2">Any other interests to tell us about?</h3>
                            <div className="form-group">
                            <div className= "row no-gutter">
                                <Field name="OtherInterests" className="form-control" rows="5" component="textarea" placeholder="Enter answer below...." />
                                <Field name="OtherInterests" component={renderError} />
                            </div>
                            </div>
                        </div>

                        <div className="row no-gutter justify-content-between pt-5">
                            <div className="col no-gutter text-left">
                                <button onClick={previousPage} type="button" className="align-middle btn btn-next white py-3">Back</button>
                            </div>
                            <div className="col no-gutter text-right">
                                <button onClick={handleSubmit} type="submit" className="align-middle btn btn-next white py-3">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

export default reduxForm({
    form: 'client-onboarding',      // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: validate,
//    asyncValidate: asyncValidate,
//    asyncBlurFields: ['Email'],
})(Interests)  
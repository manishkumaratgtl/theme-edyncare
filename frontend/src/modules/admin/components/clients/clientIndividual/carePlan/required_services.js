import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { Values } from 'redux-form-website-template';
// import { connect } from 'react-redux'
import CheckboxGroup from '../../../../../../components/reduxFormFields/checkbox_group';
// import Display from './components/display';

const optRApersonalCare = [
    { label: "Oral hygiene", value: "oral_hygiene" },
    { label: "Toiletting", value: "toileting" },
    { label: "Contience assistence", value: "contience_assistence" },
    { label: "Empty commode", value: "empty_commode" },
    { label: "Catheter support", value: "catheter_support" },
    { label: "Bath", value: "bath" },
    { label: "Bed bath", value: "bed_bath" },
    { label: "Shower", value: "shower" },
    { label: "Hair wash", value: "hair_wash" },
    { label: "Wash", value: "wash" },
    { label: "Shaving", value: "shave" }
];

const optRAcompanionship = [
    { label: "Social support", value: "social_support" },
    { label: "Emotional support", value: "emotional_support" },
    { label: "Decision making", value: "decision_making" },
];

const RAmealPreparation = [
    { label: "Favourite foods", value: "favourite_foods" },
    { label: "Diet", value: "diet" },
];

// To do add an where_is_medication_stored input
const RAmedicationReminders = [
    { label: "Prompt", value: "level_1_prompt" },
    { label: "Adminstration", value: "level_2_administration" },
    { label: "Specilist", value: "level_3_specialist" },
];

const RAhousekeeping = [
    { label: "Laundary", value: "laundry" },
    { label: "Light cleaning", value: "light_cleaning" },
    { label: "Making/changing bed", value: "make_change_bed" },
]

const RAstayingActive = [
    { label: "Walking", value: "walk" },
    { label: "Exercise", value: "exercise" },
    { label: "Sport", value: "sport" },
]

const RAtransportation = [
    { label: "Car with insurance for carer", value: "car_with_insurance_for_carer" },
    { label: "uber", value: "uber" },
]

const NAmovingAndHandling = [
    { label: "Indoor mobility", value: "indoor_mobility" },
    { label: "Outdoor mobility", value: "outdoor_mobility" },
    { label: "Bed care", value: "bed_care" },
    { label: "Transfers", value: "transfers" },
    { label: "Washing", value: "washing" },
    { label: "Showering", value: "showering" },
    { label: "Under", value: "under" },
    { label: "Toileting", value: "toileting" },
    { label: "Undressing", value: "undressing" },
    { label: "Dressing", value: "dressing" },
    { label: "Stairs", value: "stairs" },
    { label: "Vehicle transfers", value: "vehicle_transfers" },
]


const bootstrapParser = ({ input, label }) => (
    <label className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
        <input type="checkbox" {...input} />
        <span className="checkmark"> {label}</span>
    </label>
);

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span style={{
        width: "100%",
        marginTop: ".25rem",
        marginLeft: ".25rem",
        fontSize: "80%",
        color: "#dc3545"
    }}>{error}</span> : false;



class RequiredServices extends Component {

    render(){
        const { handleSubmit } = this.props; // , Value, previousPage, nextPage, pristine, reset, submitting
        return(
            <form style={{width: "100%"}} onSubmit= {handleSubmit}>
                <div className="row p-4">
                <h2>Personal care</h2>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group col-md-12">
                            <CheckboxGroup component={bootstrapParser} options={optRApersonalCare} name="RApersonalCare" />
                            <Field name="RApersonalCare" component={renderError} className="invalid-feedback" />
                        </div>
                    </div>
                </div>

                <div className="row p-4">
                <h2>Companionship</h2>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group col-md-12">
                            <CheckboxGroup component={bootstrapParser} options={optRAcompanionship} name="RAcompanionship" />
                            <Field name="RAcompanionship" component={renderError} className="invalid-feedback" />
                        </div>
                    </div>
                </div>

                <div className="row p-4">
                <h2>Meal preparation</h2>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group col-md-12">
                            <CheckboxGroup component={bootstrapParser} options={RAmealPreparation} name="RAmealPreparation" />
                            <Field name="RAmealPreparation" component={renderError} className="invalid-feedback" />
                        </div>
                    </div>
                </div>

                <div className="row p-4">
                <h2>Medication reminders</h2>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group col-md-12">
                            <CheckboxGroup component={bootstrapParser} options={RAmedicationReminders} name="RAmedicationReminders" />
                            <Field name="RAmedicationReminders" component={renderError} className="invalid-feedback" />
                        </div>
                    </div>
                </div>

                <div className="row p-4">
                <h2>House keeping</h2>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group col-md-12">
                            <CheckboxGroup component={bootstrapParser} options={RAhousekeeping} name="RAhousekeeping" />
                            <Field name="RAhousekeeping" component={renderError} className="invalid-feedback" />
                        </div>
                    </div>
                </div>

                <div className="row p-4">
                <h2>Staying active</h2>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group col-md-12">
                            <CheckboxGroup component={bootstrapParser} options={RAstayingActive} name="RAstayingActive" />
                            <Field name="RAstayingActive" component={renderError} className="invalid-feedback" />
                        </div>
                    </div>
                </div>

                <div className="row p-4">
                <h2>Transport</h2>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group col-md-12">
                            <CheckboxGroup component={bootstrapParser} options={RAtransportation} name="RAtransportation" />
                            <Field name="RAtransportation" component={renderError} className="invalid-feedback" />
                        </div>
                    </div>
                </div>


                <div className="row p-4">
                <h2>Moving and handling</h2>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group col-md-12">
                            <CheckboxGroup component={bootstrapParser} options={NAmovingAndHandling} name="NAmovingAndHandling" />
                            <Field name="NAmovingAndHandling" component={renderError} className="invalid-feedback" />
                        </div>
                    </div>
                </div>

            </form>
        )
    }

}

RequiredServices = reduxForm({
    form: 'care-plan'  
})(RequiredServices)
  
export default RequiredServices
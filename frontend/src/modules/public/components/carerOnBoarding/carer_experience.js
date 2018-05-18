import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import CheckboxGroup from '../../../../components/reduxFormFields/checkbox_group';
import validate from './carer_on_boarding_validation';

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span style={{
        width: "100%",
        marginTop: ".25rem",
        marginLeft: ".25rem",
        fontSize: "80%",
        color: "#FF9999"
    }}>{error}</span> : false;

class CarerExperience extends Component {

    componentDidMount(){
        document.getElementById('HEADER').scrollIntoView();
    }

    render(){

    const { handleSubmit, previousPage } = this.props

    const bootstrapParser = ({ input, label }) => (
        <label key={label} className="radio-container col-md-auto btn btn-outline-secondary btn-sm m-2">
            <input type="checkbox" {...input} />
            <span className="checkmark"> {label}</span>
        </label>
    );

    const proYearsOfExperience = ["None", "0-6 months", "1-3 years", "3-5 years", "above 5 years"];
    const yearsOfExperience = proYearsOfExperience.map((exp, i) =>
        <div className= "col-12 col-md-auto no-gutter">
            <div className= "m-2">
            <label key={i} className="radio-container w-100 no-gutter btn btn-outline-secondary btn-sm">
                <Field type="radio" component="input" name="YearsOfExp" value={exp} />
                <span className="checkmark">{exp}</span>
            </label>
            </div>
        </div>
    );

    const proCareQualifications = ["None", "Agency induction training", "Care certificated", "NVQ/QCF Level 2", "NVQ/QCF Level 3",
        "NVQ/QCF Level 4 or 5", "RGN/Nursing qualification", "Relavant university degree"]
    const carerQualifications = proCareQualifications.map((qualifications, i) =>
    <div className= "col-12 col-md-auto no-gutter">
    <div className= "m-2">
        <label key={i} className="radio-container w-100 no-gutter btn btn-outline-secondary btn-sm">
            <Field type="radio" component="input" name="CareQualification" value={qualifications} />
            <span className="checkmark">{qualifications}</span>
        </label>
    </div>
    </div>);

    const proDesiredWorkload = ["Occasional, 12-15 hours", "Part time, 15-25 hours", "Full time, 25-40 hours"];
    const desiredWorkload = proDesiredWorkload.map((workLoad, i) =>
    <div className= "col-12 col-md-auto no-gutter">
    <div className= "m-2">
        <label key={i} className="radio-container w-100 no-gutter btn btn-outline-secondary btn-sm">
            <Field type="radio" component="input" name="DesiredWorkload" value={workLoad} />
            <span className="checkmark">{workLoad}</span>
        </label>
    </div>
    </div>);

    const proTypeOfWork = [
        { label: "Day time shifts", value: "Day time shifts" },
        { label: "1/2 day shifts", value: "1/2 day shifts" },
        { label: "Sleeping night shifts", value: "Sleeping night shifts" },
        { label: "Awake night shifts", value: "Awake night shifts" },
        { label: "Short term live-in care", value: "Short term live-in care" },
        { label: "Weekend live-in care", value: "Weekend live-in care" },
        { label: "Live-in care", value: "Live-in care" }
];

    const proCareExperiance = [
        { label: "Alzheimer's", value: "Alzheimer's" },
        { label: "Autism and learning disabilities", value: "Autism and learning disabilities" },
        { label: "Cancer", value: "Cancer" },
        { label: "Daytime care", value: "Daytime care" },
        { label: "Dementia", value: "Dementia" },
        { label: "Disability", value: "Disability" },
        { label: "Live-in", value: "Live-in" },
        { label: "Mobility", value: "Mobility" },
        { label: "Night time", value: "Night time" },
        { label: "Palliative", value: "Palliative" },
        { label: "Respite", value: "Respite" }
];

    const proCareServices = [
        { label: "Companionship", value: "Companionship" },
        { label: "Housekeeping", value: "Housekeeping" },
        { label: "Meal preperation", value: "Meal" },
        { label: "Medication reminders", value: "Medication reminders" },
        { label: "Mobility", value: "Mobility" },
        { label: "Male personal care", value: "Male personal care" },
        { label: "Female personal care", value: "Female personal care" },
        { label: "Staying active", value: "Staying active" },
        { label: "Transportation", value: "Transportation" }
]

    return (
        <form className="onboarding-form" onSubmit={handleSubmit}>
            <div className="row no-gutter justify-content-center">
                <div className="col-8 no-gutter justify-content-center onboarding_form color0" >
                    <h2 className= "pb-4 bold">Care experience</h2>

                    <div className="col no-gutter pb-4">
                        <h3 className="">How many years of experience do you have?</h3>
                        <div className="form-group">
                        <div className= "row no-gutter justify-content-start">
                            {yearsOfExperience}
                        </div>
                        </div>
                        <Field name="YearsOfExp" component={renderError} />
                    </div>

                    <div className="col no-gutter pb-4">
                        <h3 className="">Do you have relevant care qualifications?</h3>
                        <div className="form-group">
                        <div className= "row no-gutter">
                            {carerQualifications}
                        </div>
                        </div>
                        <Field name="CareQualification" component={renderError} />
                    </div>

                    <div className="col no-gutter pb-4">
                    <h3 className="">Desired workload? Hours per week</h3>
                    <div className="form-group">
                    <div className= "row no-gutter ">
                        {desiredWorkload}
                    </div>
                    </div>
                    <Field name="DesiredWorkload" component={renderError} />
                    </div>

                    <div className="col no-gutter pb-4">
                    <h3 className="">What type of carer work are you looking for?</h3>
                    <div className="form-group">
                    <div className= "row no-gutter">
                        <CheckboxGroup component={bootstrapParser} options={proTypeOfWork} name="TypeOfWork" />
                    </div>
                    </div>
                    <Field name="TypeOfWork" component={renderError} className="invalid-feedback" />
                    </div>

                    <div className="col no-gutter pb-4">
                    <h3 className="">I have experience with:</h3>
                    <div className="form-group">
                    <div className= "row no-gutter">
                        <CheckboxGroup component={bootstrapParser} options={proCareExperiance} name="CareExperiance" />
                    </div>
                    </div>
                    <Field name="CareExperiance" component={renderError} className="invalid-feedback" />
                    </div>

                    <div className="col no-gutter pb-4">
                    <h3 className="">I am happy and confident to perform folllowing tasks:</h3>
                    <div className="form-group">
                    <div className= "row no-gutter">
                        <CheckboxGroup component={bootstrapParser} options={proCareServices} name="CareServices" />
                    </div></div>
                    <Field name="CareServices" component={renderError} className="invalid-feedback" />
                    </div>

                    <div className="col no-gutter pb-4">
                    <h3 className="pb-2">I am unhappy or unconfident to perform the folllowing tasks:</h3>
                    <div className="form-group">
                    <div className= "row no-gutter">
                        <Field name="UncomfortableDoing" className="form-control select_onboarding" rows="5" component="textarea" placeholder="Enter answer below...." />
                        <Field name="UncomfortableDoing" component={renderError} />
                    </div>
                    </div>
                    </div>

                    <div className="row no-gutter justify-content-between pt-5">
                        <div className="col no-gutter text-left">
                            <button onClick={previousPage} type="button" className="align-middle btn btn-next7 white py-3">Back</button>
                        </div>
                        <div className="col no-gutter text-right">
                            <button onClick={handleSubmit} type="submit" className="align-middle btn btn-next7 white py-3">Next</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </form >
    );
}
}


export default reduxForm({
    form: 'carer-onboarding',               
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true,
    validate: validate
})(CarerExperience)  

import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import RenderFields from '../../../../components/reduxFormFields/render_fields';
import validate from './carer_on_boarding_validation';

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span style={{
        width: "100%",
        marginTop: ".25rem",
        marginLeft: ".25rem",
        fontSize: "80%",
        color: "#FF9999"
    }}>{error}</span> : false;


class Languages extends Component {

    componentDidMount(){
        document.getElementById('HEADER').scrollIntoView();
    }

    render() {
        const { handleSubmit, previousPage, DBSValue } = this.props;
        const proSpokenEnglish = ["1 - Poor", "2", "3", "4", "5 - Fluent"];
        const SpokenEnglish = proSpokenEnglish.map((level, i) =>
            <div className= "col-12 col-md-auto no-gutter">
            <div className= "m-2">
            <label key={i} className="radio-container w-100 no-gutter btn btn-outline-secondary btn-sm">
                <Field type="radio" component="input" name="SpokenEnglish" value={level} />
                <span className="checkmark">{level}</span>
            </label>
            </div>
            </div>);


        const proRightToWork = ["UK Passport", "Visa in valid passport", "Biometric resident permit", "National identity card", "None"];
        const RightToWork = proRightToWork.map((level, i) =>
            <div className= "col-12 col-md-auto no-gutter">
            <div className= "m-2">
            <label key={i} className="radio-container w-100 no-gutter btn btn-outline-secondary btn-sm">
                <Field type="radio" component="input" name="RightToWork" value={level} />
                <span className="checkmark">{level}</span>
            </label>
            </div>
            </div>);


        const proDBS = [
            "Yes, issued within last 12 months or is registered online",
            "No, I have a clean DBS which is over 12 months old and I would be willing to pay to renew this",
            "No, I have a clean DBS which is over 12 months old and I would not be willing to pay for one",
            "No, I am not able to provide a clean DBS"];

        const DBS = proDBS.map((level, i) =>
            <div className= "col-12 col-lg-auto no-gutter">
            <div className= "m-2 w-100">
            <label key={i} className="radio-container no-gutter btn btn-outline-secondary btn-sm" >
                <Field type="radio" component="input" name="DBS.Status" value={level} />
                <span className="checkmark text-left" style= {{whiteSpace: "normal"}}>{level}</span>
            </label>
            </div>
            </div>);

const proMobilePhone = ["Yes", "No"];
const MobilePhone = proMobilePhone.map((level, i) =>
    <div className= "col-12 col-md-auto no-gutter">
    <div className= "m-2">
    <label key={i} className="radio-container w-100 no-gutter btn btn-outline-secondary btn-sm">
        <Field type="radio" component="input" name="HasSmartPhone" value={level} />
        <span className="checkmark">{level}</span>
    </label>
    </div>
    </div>);



const proDrivingCapacity = ["Yes, and I have an insured car", "Yes, but no car", "No, I can't drive"];
const DrivingCapacity = proDrivingCapacity.map((level, i) =>
    <div className= "col-12 col-md-auto no-gutter">
    <div className= "m-2">
    <label key={i} className="radio-container w-100 no-gutter btn btn-outline-secondary btn-sm">
        <Field type="radio" component="input" name="DrivingCapacity" value={level} />
        <span className="checkmark">{level}</span>
    </label>
    </div>
    </div>);

const proNoticePeriod = [
    "None - no notice period",
    "One week",
    "Two weeks",
    "One month",
    "Longer than one month"];

const NoticePeriod = proNoticePeriod.map((level, i) =>
    <div className= "col-12 col-md-auto no-gutter">
    <div className= "m-2">
    <label key={i} className="radio-container w-100 no-gutter btn btn-outline-secondary btn-sm">
            <Field type="radio" component="input" name="NoticePeriod" value={level} />
            <span className="checkmark">{level}</span>
    </label>
    </div>
    </div>);

        return (
            <form className="onboarding-form" onSubmit={handleSubmit}>
                <div className="row no-gutter justify-content-center">
                    <div className="col-8 no-gutter justify-content-center onboarding_form color0" >

                    <h2 className= "pb-4 bold">Your Background</h2>

                    <div className="col no-gutter pb-4">
                        <h3 className="">How would you rate your spoken english?</h3>
                        <div className="form-group">
                        <div className= "row no-gutter justify-content-start">
                            {SpokenEnglish}
                        </div>
                        </div>
                        <Field name="SpokenEnglish" component={renderError} />
                    </div>

                    <div className="col no-gutter pb-4">
                        <h3 className="">Do you speak any other languages?</h3>
                        <div className="form-group">
                        <div className= "row no-gutter">
                            <Field name="Languages.freeText" className="form-control select_onboarding" rows="5" component="textarea" placeholder="Enter answer below...." />
                            <Field name="Languages.freeText" component={renderError} />
                        </div>
                        </div>
                    </div>

                        <div className="col no-gutter pb-4">
                        <h3 className="">What evidence do you have to demonstrate a right to work in the UK?</h3>
                        <div className="form-group">
                        <div className= "row no-gutter justify-content-start">
                            {RightToWork}
                        </div>
                        </div>
                        <Field name="RightToWork" component={renderError} />
                        </div>
   
                        <div className="col no-gutter pb-4">
                        <h3 className="">Do you have a valid DBS?</h3>
                        <div className="form-group">
                        <div className= "row no-gutter justify-content-start">
                            {DBS}
                        </div>
                        </div>
                        <Field name="DBS.Status" component={renderError} />
                        </div>

                        {DBSValue === "Yes, issued within last 12 months or is registered online" &&
                        <div className="row no-gutter pb-4">
                            <div className="col-2 no-gutter">
                                <h3 className="question">Date of DBS issue</h3>
                            </div>
                                <div className="col no-gutter">
                                <Field type="date" className="form-control select_onboarding" component={RenderFields} name="DBS.IssueDate" label= "Date of DBS issue" />
                            </div>
                        </div>
                        }

                    <div className="col no-gutter pb-4">
                        <h3 className="">Do you have a smart mobile?</h3>
                        <div className="form-group">
                        <div className= "row no-gutter justify-content-start">
                            {MobilePhone}
                        </div>
                        </div>
                        <Field name="HasSmartPhone" component={renderError} />
                        </div>

                        <div className="col no-gutter pb-4">
                        <h3 className="">Can you drive?</h3>
                        <div className="form-group">
                        <div className= "row no-gutter justify-content-start">
                            {DrivingCapacity}
                        </div>
                        </div>
                        <Field name="DrivingCapacity" component={renderError} />
                        </div>

                        <div className="col no-gutter pb-5">
                        <h3 className="">How long is your notice period?</h3>
                        <div className="form-group">
                        <div className= "row no-gutter justify-content-start">
                            {NoticePeriod}
                        </div>
                        </div>
                        <Field name="NoticePeriod" component={renderError} />
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
            </form>
        )
    }
}

const selector = formValueSelector('carer-onboarding') 
Languages = connect(
    state => {
        const DBSValue = selector(state, 'DBS.Status')
        return {
            DBSValue
        }
    }
)(Languages)

export default reduxForm({
    form: 'carer-onboarding',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate,
})(Languages)
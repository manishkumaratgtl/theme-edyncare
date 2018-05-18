import React, { Component } from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import CheckboxGroup from '../../../../../../components/reduxFormFields/checkbox_group';
import { connect } from 'react-redux';


const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span style={{
    width: '100%',
    marginTop: '.25rem',
    marginLeft: '.25rem',
    fontSize: '80%',
    color: '#dc3545',
  }}>{error}</span> : false;

class Visits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditingPersonal: true,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() {
    // var reformattedcareNeeds= []
    // var reformattedcareServices= []
  }

  toggleEdit() {
    this.setState({ isEditingPersonal: !this.state.isEditingPersonal });
  }

  render() {

    const {
      careNeedsOPT, careServicesOPT,
    } = this.props;

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <div>
          <input {...input} type={type} placeholder={label}/>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );

    const bootstrapParser = ({ input, label }) => (
      <label className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
        <input type="checkbox" {...input} />
        <span className="checkmark"> {label}</span>
      </label>
    );

    // This is duplicated above, not sure why but is required
    var reformattedcareNeeds = [];
    if (careNeedsOPT) {
      for (var i = 0 ; i < careNeedsOPT.length; i++) {
        reformattedcareNeeds[i] = { label: careNeedsOPT[i], value: careNeedsOPT[i] };
      }
    }
    if (careServicesOPT) {
      var reformattedcareServices = [];
      for (let i = 0 ; i < careServicesOPT.length; i++) {
        reformattedcareServices[i] = { label: careServicesOPT[i], value: careServicesOPT[i] };
      }
    }

    const renderTimes = ({ fields, meta: { touched, error } }) => (
      <ul>
        <button
          type="button"
          className= "align-middle btn btn-edyn1 white py-3"
          onClick={() => fields.push({})}
        >Add Time</button>
        {touched && error && <span>{error}</span>}
        {fields.map((time, index) =>
          <div>
            <hr/>
            <h2>Visit entry #{index + 1}</h2>

            <div className= "row no-gutter">
              <div className= "col-3 no-gutter text-right pr-2">
                <h3>Visit description</h3>
              </div>
              <div className= "col no-gutter">
                <Field
                  name={`${time}.description`}
                  type="text"
                  component={renderField}
                  className= "select_onboarding"
                  label="Visit description"/>
              </div>
            </div>

            <div className= "row no-gutter">
              <div className= "col-3 no-gutter text-right pr-2">
                <h3>Frequency</h3>
              </div>
              <div className= "col no-gutter">
                <Field name={`${time}.frequency`} component= "select" className="select" label="Frequencey">
                  <option value="" disabled selected>Select</option>
                  <option value="Daily"><font style={{ color: 'red' }}>Daily</font></option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </Field>
              </div>
            </div>

            <div className= "row no-gutter">
              <div className= "col-3 no-gutter text-right pr-2">
                <h3>Day/ date</h3>
              </div>
              <div className= "col no-gutter">
                <Field
                  name={`${time}.day`}
                  type="text"
                  component={renderField}
                  className="input_onboarding"
                  label="Day of the week" />
              </div>
            </div>

            <div className= "row no-gutter">
              <div className= "col-3 no-gutter text-right pr-2">
                <h3>Time</h3>
              </div>
              <div className= "col no-gutter">
                <Field
                  name={`${time}.startTime`}
                  type="time"
                  component={renderField}
                  label="Start time"
                  className= ""/>
              </div>
            </div>

            <div className= "row no-gutter">
              <div className= "col-3 no-gutter text-right pr-2">
                <h3>Duration</h3>
              </div>
              <div className= "col no-gutter">
                <Field
                  name={`${time}.duration`}
                  type="time"
                  component={renderField}
                  label="Duration"
                  className= ""/>
              </div>
            </div>

            <div className= "row no-gutter">
              <div className= "col-3 no-gutter text-right pr-2">
                <h3>Care services</h3>
              </div>
              <div className="form-group col no-gutter">
                <CheckboxGroup component={bootstrapParser} options={reformattedcareServices} name={`${time}.careServices`} />
                <Field name={`${time}.careServices`} component={renderError} className="invalid-feedback" />
              </div>
            </div>

            <div className= "row no-gutter">
              <div className= "col-3 no-gutter text-right pr-2">
                <h3>Care needs</h3>
              </div>
              <div className="form-group col no-gutter">
                <CheckboxGroup component={bootstrapParser} options={reformattedcareNeeds} name={`${time}.careNeeds`} />
                <Field name={`${time}.careNeeds`} component={renderError} className="invalid-feedback" />
              </div>
            </div>

            <div className= "row no-gutter">
              <div className= "col-3 no-gutter text-right pr-2">
                <h3>Visit notes</h3>
              </div>
              <div className= "col no-gutter">
                <Field
                  name={`${time}.visitNotes`}
                  type="text"
                  component={renderField}
                  label="Visit notes"
                  className= ""/>
              </div>
            </div>

            <button
              type="button"
              title="Remove Time"
              className= "align-middle btn btn-edyn2 white py-3"
              onClick={() => fields.remove(index)}>Delete</button>
          </div>
        )}
      </ul>
    );

    // const FieldArraysForm = (props) => {
    //     const { handleSubmit, pristine, reset, submitting, } = props
    // }

    return (
      <form>
        <FieldArray
          name="careTimesExact"
          component={renderTimes}
        />
      </form>
    );
  }
}


Visits = reduxForm({
  form: 'care-plan',
})(Visits);

const selector = formValueSelector('care-plan');
Visits = connect(
  (state) => {
    const careNeedsOPT = selector(state, 'careNeeds');
    const careServicesOPT = selector(state, 'careServices');
    return {
      careNeedsOPT,
      careServicesOPT,
    };
  }
)(Visits);

export default Visits;

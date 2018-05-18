import React, { Component } from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'
import CheckboxGroup from "../../../../../../components/reduxFormFields/checkbox_group"
import { connect } from 'react-redux';

import Display from './components/display';
import RenderFields from '../../../../../../components/reduxFormFields/render_fields';
import RenderSelect from '../../../../../../components/reduxFormFields/render_select';

class AboutYou extends Component {
    
    render(){
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

        const renderTimes = ({ fields, meta: { touched, error } }) => (
            <ul className= "no-gutter">
                <button 
                    type="button" 
                    className= "align-middle btn btn-edyn1 white py-3"
                    onClick={() => fields.push({})}
                >Add interest</button>
                {touched && error && <span>{error}</span>}
              {fields.map((time, index) =>
              <div>
                    
                <div className= "row no-gutter">
                    <div className= "col-md-3 no-gutter text-right my-auto py-2 pr-3">
                        <h3>Interest</h3>
                    </div>
                    <div className= "col-md-7 no-gutter">
                        <Field name={`${time}.frequency`} component= {RenderSelect} className="form-control" label="Frequencey">
                            <option value="" disabled selected>Select</option>
                            <option value="Antiques">Antiques</option>
                            <option value="Art">Art</option>
                            <option value="Cooking">Cooking</option>
                            <option value="Dancing">Dancing</option>
                            <option value="Exercise">Exercise</option>
                            <option value="Film">Film</option>
                            <option value="Food">Food</option>
                            <option value="Music">Music</option>
                            <option value="Politics">Politics</option>
                            <option value="Reading">Reading</option>
                            <option value="Spirtuality">Spirtuality</option>
                            <option value="Sport">Sport</option>
                            <option value="Travelling">Travelling</option>
                            <option value="Other">Other</option>
                        </Field>
                    </div>
                </div>

                <div className= "row no-gutter align-content-center" style={{width: "100%"}}>
                    <div className= "col-md-3 no-gutter text-right my-auto py-2 pr-3" >
                        <h3 className= "my-auto">Further detail</h3>
                    </div>
                    <div className= "col-md-7 no-gutter">
                        <Field type="text" className="form-control" name={`${time}.description`} component={RenderFields} />
                    </div>
                </div>

                <button
                    type="button"
                    title="Remove Time"
                    className= "align-middle btn btn-edyn2 white py-3"
                    onClick={() => fields.remove(index)}>Delete
                </button>
                
                </div> 
              )}
            </ul>
          )

        return(
            <div className= "container-float">
                <div className= "row no-gutter p-2" style={{width: "100%"}} >
                    <div className= "col-12 no-gutter">

                    <div className= "row no-gutter pb-4">
                    <h3 className= "text-center bold">Background and family</h3>
                        <Display fieldName= "lifeAndBackground.birthAndEarlyYears" Label= "Birth and early years" placeholder= "" dispType="text"/>
                        <Display fieldName= "lifeAndBackground.schoolAndUniversity" Label= "School and university" placeholder= "" dispType="text"/>
                        <Display fieldName= "lifeAndBackground.workAndCareer" Label= "Work and career" placeholder= "" dispType="text"/>
                        <Display fieldName= "lifeAndBackground.retirement" Label= "Retirement" placeholder= "" dispType="text"/>
                        <Display fieldName= "lifeAndBackground.relationshipsAndFamily" Label= "Relationships and family" placeholder= "" dispType="text"/>
                    </div>

                    <div className= "row no-gutter pb-4">
                    <h3 className= "text-center bold">Lifestyle and schedule</h3>
                        <Display fieldName= "dailySchedule" Label= "Daily schedule" placeholder= "" dispType="text"/>
                        <Display fieldName= "weeklySchedule" Label= "Weekly schedule" placeholder= "" dispType="text"/>
                        <Display fieldName= "family" Label= "Family" placeholder="" dispType="text"/>
                        <Display fieldName= "friends" Label= "Friends" placeholder="" dispType="text"/>
                        <Display fieldName= "visitors" Label= "Visitors" placeholder="" dispType="text"/>
                    </div>

                    <div className= "row no-gutter pb-4">
                    <h3 className= "text-center bold">Interests</h3>
                    <div className= "w-100">
                        <FieldArray 
                            name="interests" 
                            component={renderTimes}
                        />
                    </div>                    
                    </div>

                    </div>
                </div>
            </div>
            )
    }
}

AboutYou = reduxForm({
    form: 'care-plan'  
  })(AboutYou)
  
export default AboutYou
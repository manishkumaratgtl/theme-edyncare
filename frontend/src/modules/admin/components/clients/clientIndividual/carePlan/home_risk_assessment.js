import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Values } from 'redux-form-website-template';
import { connect } from 'react-redux';

const HRAgeneral = [
    {label: "Smoke detector", field: "smoke_detector", type: "radio"},
    {label: "Keys to windows and doors accessible", field: "keys_to_windows_and_doors_accessible" , type: "radio"},
    {label: "Doorbell working", field: "doorbell_working", type: "radio"},
    {label: "Gas cut off point", field: "gas_cut_off_point", type: "radio"},
    {label: "Electricty cut off point", field: "electric_cut_off_point", type: "radio"},
    {label: "Water cut off point", field: "water_cut_off_point", type: "radio"},
    {label: "Outside entract is safe and lit", field: "outside_entrance_is_safe_and_lit", type: "radio"},
    {label: "Stairs and rails secure", field: "stairs/railing_secure", type: "radio"},
    {label: "Locks working", field: "locks_working", type: "radio"},
]

const HRAliving_area = [
    {label: "Doorways accessible", field: "doorways_accessible", type: "radio"},
    {label: "Uncluttered walkways", field: "uncluttered_walkways", type: "radio"},
    {label: "Flooring safe", field: "flooring_safe", type: "radio"},
    {label: "Lighting working", field: "lighting_working", type: "radio"},
    {label: "Electrical wires secured", field: "electrical_wires_secured", type: "radio"},
]

const HRAkitchen = [
    {label: "Doorways accessible", field: "doorways_accessible", type: "radio"},
    {label: "Appliances working", field: "appliances_working", type: "radio"},
    {label: "Taps working", field: "taps_working", type: "radio"},
    {label: "Electrical wires appear safe", field: "electric_wires_appear_safe", type: "radio"},
    {label: "Fridge and freezer working", field: "fridge_freezer_working", type: "radio"},
    {label: "Cooker and hob working", field: "cooker_hob_working", type: "radio"},
]

const HRAbedroom = [
    {label: "Doorways accessible", field: "doorway_accessible", type: "radio"},
    {label: "Appropriate transfer space", field: "appropriate_transfer_space", type: "radio"},
    {label: "Flooring safe", field: "flooring_safe", type: "radio"},
    {label: "Lighting working", field: "lighting_working", type: "radio"},
    {label: "Electrical wires safe", field: "electrical_wires_safe", type: "radio"},
]

const HRAbathroom = [
    {label: "Shower bath", field: "shower_bath", type: "radio"},
    {label: "Non-slip mat", field: "non_slip_mat", type: "radio"},
    {label: "Toilet working", field: "toilet_working", type: "radio"},
    {label: "Flooring in good condition", field: "flooring_condition", type: "radio"},
]


class HomeRiskAssessment extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditingHomeRiskAssessment: true,
        };
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({isEditingHomeRiskAssessment: !this.state.isEditingHomeRiskAssessment})
    }

    render(){
        const { handleSubmit, pristine, submitting, HomeRiskAssessmentValue } = this.props

        const HRAgeneralAll = HRAgeneral.map((level, i) =>
            <div className= "row">
                <div className= "col-3 text-right my-auto">
                    <h3>{level.label}</h3>
                </div>
                <div className= "col-2 text-center">
                    <label key={i} className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
                        <Field type="radio" component="input" placeholder={level.label} name= {"gen_"+ level.field} className= "select_onboarding" value= "Yes" />
                        <span className="checkmark">Yes</span>
                    </label>
                    <label key={i.i} className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
                        <Field type="radio" component="input" placeholder={level.label} name= {"gen_"+ level.field} className= "select_onboarding" value= "No" />
                        <span className="checkmark">No</span>
                    </label>
                </div>
                    <div className= "col-4">
                    {this.state.isEditingHomeRiskAssessment=== true ?
                        <Field  name=  {"gen_"+ level.field+ "Comment"} component="input" type= "text"
                                placeholder= "Comment" className= "select_onboarding" 
                        /> :
                        <h2>{HomeRiskAssessmentValue["gen_"+level.field+ "Comment"]}</h2>
                    }
                    </div>
                </div>);

        const HRAliving_areaAll = HRAliving_area.map((level, i) =>
            <div className= "row">
                <div className= "col-3 text-right my-auto">
                    <h3>{level.label}</h3>
                </div>
                <div className= "col-2 text-center">
                    <label key={i} className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
                        <Field type="radio" component="input" placeholder={level.label} name= {"liv_"+ level.field} className= "select_onboarding" value= "Yes" />
                        <span className="checkmark">Yes</span>
                    </label>
                    <label key={i.i} className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
                        <Field type="radio" component="input" placeholder={level.label} name= {"liv_"+ level.field} className= "select_onboarding" value= "No" />
                        <span className="checkmark">No</span>
                    </label>
                </div>
                    <div className= "col-4">
                    {this.state.isEditingHomeRiskAssessment=== true ?
                        <Field  name=  {"liv_"+ level.field+ "Comment"} component="input" type= "text"
                                placeholder= "Comment" className= "select_onboarding" 
                        /> :
                        <h2>{HomeRiskAssessmentValue["liv_"+ level.field+ "Comment"]}</h2>
                    }
                    </div>
                </div>);
                
        const HRAkitchenAll = HRAkitchen.map((level, i) =>
            <div className= "row">
                <div className= "col-3 text-right my-auto">
                    <h3>{level.label}</h3>
                </div>
                <div className= "col-2 text-center">
                    <label key={i} className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
                        <Field type="radio" component="input" placeholder={level.label} name= {"kit_"+ level.field} className= "select_onboarding" value= "Yes" />
                        <span className="checkmark">Yes</span>
                    </label>
                    <label key={i.i} className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
                        <Field type="radio" component="input" placeholder={level.label} name= {"kit_"+ level.field} className= "select_onboarding" value= "No" />
                        <span className="checkmark">No</span>
                    </label>
                </div>
                    <div className= "col-4">
                    {this.state.isEditingHomeRiskAssessment=== true ?
                        <Field  name=  {"kit_"+ level.field+ "Comment"} component="input" type= "text"
                                placeholder= "Comment" className= "select_onboarding" 
                        /> :
                        <h2>{HomeRiskAssessmentValue["kit_"+ level.field+ "Comment"]}</h2>
                    }
                    </div>
                </div>);

        const HRAbedroomAll = HRAbedroom.map((level, i) =>
        <div className= "row">
            <div className= "col-3 text-right my-auto">
                <h3>{level.label}</h3>
            </div>
            <div className= "col-2 text-center">
                <label key={i} className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
                    <Field type="radio" component="input" placeholder={level.label} name= {"bed_"+ level.field} className= "select_onboarding" value= "Yes" />
                    <span className="checkmark">Yes</span>
                </label>
                <label key={i.i} className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
                    <Field type="radio" component="input" placeholder={level.label} name= {"bed_"+ level.field} className= "select_onboarding" value= "No" />
                    <span className="checkmark">No</span>
                </label>
            </div>
                <div className= "col-4">
                {this.state.isEditingHomeRiskAssessment=== true ?
                    <Field  name=  {"bed_"+ level.field+ "Comment"} component="input" type= "text"
                            placeholder= "Comment" className= "select_onboarding" 
                    /> :
                    <h2>{HomeRiskAssessmentValue["bed_"+ level.field+ "Comment"]}</h2>
                }
                </div>
            </div>);

        HRAbathroom.map((level, i) =>
        <div className= "row">
            <div className= "col-3 text-right my-auto">
                <h3>{level.label}</h3>
            </div>
            <div className= "col-2 text-center">
                <label key={i} className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
                    <Field type="radio" component="input" placeholder={level.label} name= {"bar_"+ level.field} className= "select_onboarding" value= "Yes" />
                    <span className="checkmark">Yes</span>
                </label>
                <label key={i.i} className="radio-container col-md-3 btn btn-outline-secondary btn-sm m-2">
                    <Field type="radio" component="input" placeholder={level.label} name= {"bar_"+ level.field} className= "select_onboarding" value= "No" />
                    <span className="checkmark">No</span>
                </label>
            </div>
                <div className= "col-4">
                {this.state.isEditingHomeRiskAssessment=== true ?
                    <Field  name=  {"bar_"+ level.field+ "Comment"} component="input" type= "text"
                            placeholder= "Comment" className= "select_onboarding" 
                    /> :
                    <h2>{HomeRiskAssessmentValue["bar_"+ level.field+ "Comment"]}</h2>
                }
                </div>
            </div>);

        return(
            <form style={{width: "100%"}} onSubmit= {handleSubmit}>
                <h3>Home risk assessment</h3>
                <h2>General</h2>
                    {HRAgeneralAll}
                <h2>Living area</h2>
                    {HRAliving_areaAll}
                <h2>Kitchen</h2>
                    {HRAkitchenAll}
                <h2>Bedroom</h2>
                    {HRAbedroomAll}
                <h2>Bathroom</h2>
                    {HRAkitchenAll} 

                <button type="submit" disabled={pristine || submitting} onClick={this.toggleEdit}>
                {   
                    (this.isEditingMealsDietary=== false) ?
                    "Edit" :
                    "Save" 
                }
                </button>
                <Values form="care-plan" />
            </form>
        )
    }
}


HomeRiskAssessment = reduxForm({
    form: 'care-plan'  
  })(HomeRiskAssessment)
  
  const selector = formValueSelector('care-plan') 
  HomeRiskAssessment = connect(
    state => {
      const HomeRiskAssessmentValue = selector(state, 
        'gen_smoke_detectorComment',
        'gen_keys_to_windows_and_doors_accessibleComment', 
        'gen_doorbell_workingComment',
        'gen_gas_cut_off_pointComment',
        'gen_electric_cut_off_pointComment',
        'gen_water_cut_off_pointComment',
        'gen_outside_entrance_is_safe_and_litComment',
        'gen_stairs_railing_secureComment',
        'gen_locks_workingComment',
        
        'liv_doorways_accessibleComment',
        'liv_uncluttered_walkwaysComment',
        'liv_flooring_safeComment',
        'liv_lighting_workingComment',
        'liv_electrical_wires_securedComment',
        
        'kit_doorways_accessibleComment',
        'kit_appliances_workingComment',
        'kit_taps_workingComment',
        'kit_electric_wires_appear_safeComment',
        'kit_fridge_freezer_workingComment',
        'kit_cooker_hob_workingComment',

        'bed_doorway_accessibleComment',
        'bed_appropriate_transfer_spaceComment',
        'bed_flooring_safeComment',
        'bed_lighting_workingComment',
        'bed_electrical_wires_safeComment',

        'bar_shower_bathComment',
        'bar_non_slip_matComment',
        'bar_toilet_workingComment',
        'bar_flooring_conditionComment',
    )

    


      return {
        HomeRiskAssessmentValue,
      }
    }
  )(HomeRiskAssessment)
  
  
  export default HomeRiskAssessment
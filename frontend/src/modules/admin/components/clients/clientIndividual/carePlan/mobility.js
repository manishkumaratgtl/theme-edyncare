import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
// import { Values } from 'redux-form-website-template';
import { connect } from 'react-redux'
// import Display from './components/display';

class Mobility extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditingMealsDietarys: true,
        };
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({isEditingMealsDietary: !this.state.isEditingMealsDietary})
    }

    render(){
        const { handleSubmit, pristine, submitting, MealsDietaryValue } = this.props; //Value, previousPage, nextPage, reset,

        return(
            <div className= "row p-4">
                <form style={{width: "100%"}} onSubmit= {handleSubmit}>
                <h3>Mobility</h3>
                    <div className= "row">

                        <div className= "col-3 text-right my-auto">
                        <h3>Meals and dietary</h3>
                        </div>
                        <div className= "col-6">
                            {this.state.isEditingMealsDietary=== true ?
                            <Field name="mealsDietary" component="textarea" placeholder="Wake up: " className= "select_onboarding"/> :
                            <h2>{MealsDietaryValue.mealsDietary}</h2>
                            }
                        </div>
                    </div>

                    <button type="submit" disabled={pristine || submitting} onClick={this.toggleEdit}>
                    {   
                        (this.isEditingMealsDietary=== false) ?
                        "Edit" :
                        "Save" 
                    }
                    </button>
                </form>
            </div>
        )
    }
}


Mobility = reduxForm({
    form: 'care-plan'  
  })(Mobility)
  
  const selector = formValueSelector('care-plan') 
  Mobility = connect(
    state => {
      const MealsDietaryValue = selector(state, 
        'mealsDietary', "mealsDietary"
    )

      return {
        MealsDietaryValue,
      }
    }
  )(Mobility)
  
  
  export default Mobility
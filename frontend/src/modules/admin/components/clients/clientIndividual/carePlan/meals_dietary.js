import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
// import { Values } from 'redux-form-website-template';
import { connect } from 'react-redux';

// import Display from './components/display';

class MealsDietary extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditingMealsDietary: true,
        };
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({isEditingMealsDietary: !this.state.isEditingMealsDietary})
    }

    render(){
        const { handleSubmit, MealsDietaryValue } = this.props; // Value, previousPage, nextPage, pristine, reset, submitting,

        return(
            <div className= "row p-4">
                <form style={{width: "100%"}} onSubmit= {handleSubmit}>
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
                    <div className="align-middle btn btn-edyn1 white py-3 mb-1" onClick={this.toggleEdit} >                    {   
                    (this.state.isEditingMealsDietary=== false) ?
                        "Edit" :
                        "Save" 
                    }
                    </div>
                </form>
            </div>
        )
    }
}


MealsDietary = reduxForm({
    form: 'care-plan'  
  })(MealsDietary)
  
  const selector = formValueSelector('care-plan') 
  MealsDietary = connect(
    state => {
      const MealsDietaryValue = selector(state, 
        'mealsDietary', "mealsDietary"
    )

      return {
        MealsDietaryValue,
      }
    }
  )(MealsDietary)
  
  
  export default MealsDietary
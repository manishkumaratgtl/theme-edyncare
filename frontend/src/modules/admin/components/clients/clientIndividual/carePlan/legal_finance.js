import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { Values } from 'redux-form-website-template';
// import { connect } from 'react-redux'
import Display from './components/display';

class LegalFinance extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditingLegalFinance: true,
        };
        this.toggleEdit = this.toggleEdit.bind(this);
    };
    
    toggleEdit() {
        this.setState({isEditingDailyRoutines: !this.state.isEditingDailyRoutines})
    };

    render(){

        return(
            <div className= "container-float">
            <div className= "row no-gutter p-2" style={{width: "100%"}} >
                <div className= "col-12 no-gutter">

                <div className= "row no-gutter pb-4">
                <h3 className= "text-right bold">Billing</h3>
                    <Display fieldName= "billingSentTo" Label= "Sent to" placeholder= "Client or other" dispType="text"/>
                </div>
                </div>

            </div>
            </div>
        )
    }
}

LegalFinance = reduxForm({
    form: 'care-plan'  
})(LegalFinance)
  
export default LegalFinance
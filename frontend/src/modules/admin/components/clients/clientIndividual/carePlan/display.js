import React, { Component } from 'react';
import { Field } from 'redux-form';
// import { Values } from 'redux-form-website-template';
// import { connect } from 'react-redux'

export default class Display extends Component {    
    render(){
        const {isEditing, dispValue, Label, fieldName, dispType} = this.props

        return(
            <div className= "row">
            <div className= "col-3 text-right my-auto">
                <h3>{Label}</h3>
            </div>
            <div className= "col-6">
                {this.props.isEditing=== true ?
                    <Field name= {fieldName} component="input" type={dispType} placeholder={Label} className= "select_onboarding"/> :
                    <h2>{dispValue}</h2>
                }
            </div>
        </div>
        )
    }
}

import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
// import { Values } from 'redux-form-website-template';
import { connect } from 'react-redux';
import Display from './components/display';



class Representatives extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditingEmergency: true,
        };
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({isEditingEmergency: !this.state.isEditingEmergency})
    }

    render(){
        const { handleSubmit, EmergencyValue } = this.props;// previousPage, nextPage, pristine, reset, submitting, Value
        return(
            <div className= "container-float">
                <div className= "row no-gutter p-2" style={{width: "100%"}} >
                    <div className= "col-12 no-gutter">

                    <div className= "row no-gutter pb-4">
                    <h3 className= "text-right bold">Relationship to care recipient</h3>
                        <Display fieldName= "relationshipToRecipient" Label= "Relationship to care recipient" placeholder= "" dispType="text"/>
                        <Display fieldName= "powerOfAttourney" Label= "Power of Attourney" placeholder= "Yes/ No" dispType="text"/>
                        <Display fieldName= "levelOfAccess" Label= "Level of access" placeholder= "" dispType="text"/>
                    </div>

                    <div className= "row no-gutter pb-4">
                    <h3 className= "text-right bold">Full name</h3>
                        <Display fieldName= "client.name.title" Label= "Title" placeholder= "Mr/ Mrs" dispType="text"/>
                        <Display fieldName= "client.name.firstName" Label= "First name" placeholder= "First name" dispType="text"/>
                        <Display fieldName= "client.name.surname" Label= "Surname" placeholder="Surname" dispType="text"/>
                        <Display fieldName= "client.name.preferedName" Label= "Prefered name" placeholder="" dispType="text"/>
                    </div>

                    <div className= "row no-gutter pb-4">
                    <h3 className= "text-right bold">Address</h3>
                        <Display fieldName= "client.address.houseNumber" Label= "House number" placeholder="" dispType="text"/>
                        <Display fieldName= "client.address.street" Label= "Street" placeholder="" dispType="text"/>
                        <Display fieldName= "client.address.town" Label= "Town/ City" placeholder="" dispType="text"/>
                        <Display fieldName= "client.address.postCode" Label= "Post code" placeholder="Post code" dispType="text"/>
                    </div>

                    <div className= "row no-gutter pb-4">
                    <h3 className= "text-right bold">Contact information</h3>
                        <Display fieldName= "client.Email" Label= "Email" placeholder= "" dispType="text"/>
                        <Display fieldName= "client.phoneContact" Label= "Phone number" placeholder= "" dispType="text"/>  
                    </div>
                </div>
                    

                </div>
                </div>
        )
    }
}


Representatives = reduxForm({
    form: 'care-plan' ,
    keepDirtyOnReinitialize: true 
  })(Representatives)
  
  const selector = formValueSelector('care-plan') 
  Representatives = connect(
    state => {
      const EmergencyValue = selector(state, 
        'GPDoctorName', 
        'GPSurgeryAddress', 
        'GPContactNumber',
        'clientRecipRelationship',
        'clientTitle',
        'clientFirstName',
        'clientSecondName',
        'clientAddress',
        'clientContactNumber',
        'clientEmail'
    )

      return {
        EmergencyValue,

      }
    }
  )(Representatives)
  
  
  export default Representatives
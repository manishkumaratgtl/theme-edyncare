import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderFields from '../../../../../../components/reduxFormFields/render_fields';
import Display from './components/display'


const upper = value => value && value.toUpperCase()
const upperFirst = value => value && value.charAt(0).toUpperCase() + value.substr(1)

class RecipientDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditingPersonal: true,
        };
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({isEditingPersonal: !this.state.isEditingPersonal})
    }

    render() {
        // const { handleSubmit, Value, previousPage, nextPage, pristine, reset, submitting } = this.props        
        return(
            <div className= "container-float">
                <div className= "row no-gutter p-2" style={{width: "100%"}} >
                    <div className= "col-12 no-gutter">

                    <div className= "row no-gutter pb-4">
                    <h3 className= "text-right bold">Full name</h3>
                        <Display fieldName= "name.title" Label= "Title" placeholder= "Mr/ Mrs" dispType="text"/>
                        <Display fieldName= "name.firstName" Label= "First name" placeholder= "First name" dispType="text"/>
                        <Display fieldName= "name.surname" Label= "Surname" placeholder="Surname" dispType="text"/>
                        <Display fieldName= "name.preferedName" Label= "Prefered name" placeholder="" dispType="text"/>
                    </div>

                    <div className= "row no-gutter pb-4">
                    <h3 className= "text-center bold">Residence and access information</h3>
                        <Display fieldName= "address.phoneContact" Label= "Phone number" placeholder="" dispType="tel"/>
                        <Display fieldName= "address.houseNumber" Label= "House number" placeholder="" dispType="text"/>
                        <Display fieldName= "address.street" Label= "Street" placeholder="" dispType="text"/>
                        <Display fieldName= "address.town" Label= "Town/ City" placeholder="" dispType="text"/>
                        <Display fieldName= "address.postCode" Label= "Post code" placeholder="Post code" dispType="text"/>
                        <Display fieldName= "address.accessInfo" Label= "Access information" placeholder="All information required for carers to access residence" dispType="textarea"/>
                        <Display fieldName= "address.pets" Label= "Pets" placeholder="All information of pets in the residence" dispType="textarea"/>
                        <Display fieldName= "address.otherOccupants" Label= "Other occupants" placeholder="All information of other occupants in the residence" dispType="textarea"/>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}


RecipientDetails = reduxForm({
    form: 'care-plan'  
})(RecipientDetails)

export default RecipientDetails

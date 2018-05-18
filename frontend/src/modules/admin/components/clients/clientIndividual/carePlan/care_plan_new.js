import React, { Component } from 'react';
import { reset, reduxForm } from 'redux-form';
import { Values } from 'redux-form-website-template';
// import { connect } from 'react-redux'
import { toast } from 'react-toastify'; 

import RecipientDetails from './recipient_details'
import NewCarePlanInfo from './new_care_plan_info'
import Representatives from './representatives'
import LegalFinance from './legal_finance'
import AboutYou from './about_you'
import MealsDietary from './meals_dietary'
import ActivitesSocial from './activites_social'
import Mobility from './mobility'
import HomeRiskAssessment from './home_risk_assessment'
import RequiredServices from './required_services'
import Visits from './visits'

import validate from './val_care_plan';

import CollapsibleItem from '../../collapsible_item';

class CarePlanNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            clientOnBoarding: {
                recipient: {}
            },
            isLoading: true
        };
    }

    componentDidMount(){
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'client/' + this.props.selectClientId, {
            method: "GET",
            body: null,
        }).then((response)=> {
            if (response.status!== 200){
                return
            }
            response.json().then((data)=> {
                this.setState({
                    clientOnBoarding: data,
                    isLoading: false
                })
            })
        }).catch((error)=> {
            return
        })
    }

    render(){
        if (this.state.isLoading) {
            return  <div>Loading...</div>
        }
        
        const { handleSubmit } = this.props; // , pristine, previousPage, nextPage, submitting

        var prepopulatedValues = (this.state.clientOnBoarding.careForClient=== "0") ?
        {
            // Recipient isnt client
            "careForClient": this.state.clientOnBoarding.careForClient,
            "relClientRecipient": this.state.clientOnBoarding.relClientRecipient,
            "client": this.state.clientOnBoarding.name,
            "ClientId": this.props.selectClientId,
            "recipient": this.state.clientOnBoarding.recipient[0],
            "careTime": this.state.clientOnBoarding.recipient[0].careTime,
            "careNeeds": this.state.clientOnBoarding.recipient[0].careNeeds,
            "careServices": this.state.clientOnBoarding.recipient[0].careServices,
            "interests": this.state.clientOnBoarding.interests,
            "serial": 0,
        } :
        {
            // Recipient is client
            "careForClient": this.state.clientOnBoarding.careForClient,
            "relClientRecipient": "NA",
            "client": this.state.clientOnBoarding,
            "ClientId": this.props.selectClientId,
            "recipient": this.state.clientOnBoarding,
            "careTime": this.state.clientOnBoarding.recipient[0].careTime,
            "careNeeds": this.state.clientOnBoarding.recipient[0].careNeeds,
            "careServices": this.state.clientOnBoarding.recipient[0].careServices,
            "interests": this.state.clientOnBoarding.interests,
            "serial": 0,
        }  

        return(
            <form className= "container p-4 m-4" onSubmit={handleSubmit} style= {{width: "auto", border: "2px solid grey", backgroundColor: "white"}}>
                <h2 className= "pb-4">Create a new care plan</h2>
                    <div>
                        <h2>1. Effecitve dates</h2>
                            <NewCarePlanInfo initialValues= {prepopulatedValues} />

                        <h2>2. Personal profile</h2>
                            <h3>2.1 Care recipient</h3>
                                <RecipientDetails />
                            <h2>2.2 About You</h2>
                                <AboutYou/> 
                            <h2>2.3 Representatives</h2>
                                <Representatives /> 
                            <h2>2.3 Accounts and invoices</h2>
                                <LegalFinance/> 
                        
                        <h2>3. Medical profile</h2>
                        <Visits /> 


                        <MealsDietary button="Save"/> 

                        <Mobility button="Save"/> 

                        <HomeRiskAssessment button="Save"/> 

                        <RequiredServices button="Save"/> 

                        <Values form= 'care-plan' />
                    </div>
                <button className="align-middle btn btn-edyn1 white py-3 mb-1"  type="submit" >Submit</button>
            </form>
        )
    }
}

const onSubmit = async (values, dispatch, { nextPage }) => {
    await fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'careplan', {
        method: "POST",
        body: JSON.stringify(values, null, 2),
    }).then(function (response) {
        if (response.status === 200) {
            response.json().then(json => {
                dispatch(reset('care-plan'))
            });
        }
    }, function (error) {
        toast.error("Something went wrong, pls try again", {
            position: toast.POSITION.TOP_RIGHT
        });
    })
};

CarePlanNew = reduxForm({
    form: 'care-plan',
    validate,
    onSubmit
})(CarePlanNew)

export default CarePlanNew
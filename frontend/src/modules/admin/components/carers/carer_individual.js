import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { NavLink } from "react-router-dom";

import OnBoarding from './carerIndividual/on_boarding';
import Profile from './carerIndividual/profile';
import CarePlan from './carerIndividual/care_plan';

class CarerIndividual extends Component {

    render(){
        return (
            <div id="tab-admin" className= "container-fluid no-gutter">
            <Tabs 
                headerStyle={{
                    width: 'auto', 
                    backgroundColor:"#FBF8EF",
                    border: "none"
                   }} 
                activeHeaderStyle={{
                    border: "none", 
                    backgroundColor:"#32535A", 
                    color:"white"}} >
                    <Tab label="Profile"><Profile selectCarerId= {this.props.match.params.id}/></Tab>
                    <Tab label="Calender">Calender</Tab>
                    <Tab label="Certification"><CarePlan selectCarerId= {this.props.match.params.id}/></Tab>
                    <Tab label="Payroll">Payroll</Tab>
                    <Tab label="Emergency contact">Emergency contact</Tab>
                    <Tab label="Points">Points</Tab>
                    <Tab label="Messages">Messages</Tab>
                    <Tab label="Onboarding"><OnBoarding selectCarerId= {this.props.match.params.id}/></Tab>
                </Tabs>
                <NavLink to="/portal-admin/carers" className="btn btn-secondary">Return to carer list</NavLink>


                 

            </div>

        )
    }
}

export default CarerIndividual
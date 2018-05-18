import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import CarePlan from './clientIndividual/care_plan';
import { NavLink } from 'react-router-dom';
// import adminStore from '../adminStore'
import OnBoarding from './clientIndividual/on_boarding';
import Profile from './clientIndividual/profile';

export default class ClientIndividual extends Component {
  render() {
    return (
      <div className= "container">
        <Tabs headerStyle={{ width: 'auto' }} activeHeaderStyle={{ border: 'none', borderBottom: 'thick solid black' }} >
          <Tab label="Profile"><Profile selectClientId= {this.props.match.params.id}/></Tab>
          <Tab label="Calender">Calender</Tab>
          <Tab label="Care plan"><CarePlan selectClientId= {this.props.match.params.id}/></Tab>
          <Tab label="Emergency contact">Emergency contact</Tab>
          <Tab label="Points">Points</Tab>
          <Tab label="Messages">Messages</Tab>
          <Tab label="Onboarding"><OnBoarding selectClientId= {this.props.match.params.id}/></Tab>
        </Tabs>
        <NavLink to="/portal-admin/clients" className="btn btn-secondary">Return to client list</NavLink>
      </div>
    );
  }
}

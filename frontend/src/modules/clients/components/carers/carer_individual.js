import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { NavLink } from "react-router-dom";
import Profile from './carerIndividual/profile';

class CarerIndividual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carer: [],
        };
    }

    render() {
        return (
            <div className="container">
                <Tabs headerStyle={{ width: 'auto' }} activeHeaderStyle={{ border: "none", borderBottom: "thick solid black" }} >
                    <Tab label="Profile"><Profile selectCarerId={this.props.match.params.id} /></Tab>
                    <Tab label="Calender">Calender</Tab>
                    <Tab label="Messages">Messages</Tab>
                </Tabs>
                <NavLink to="/portal-client/carers" className="btn btn-secondary">Return to carer list</NavLink>
            </div>
        )
    }
}

export default CarerIndividual
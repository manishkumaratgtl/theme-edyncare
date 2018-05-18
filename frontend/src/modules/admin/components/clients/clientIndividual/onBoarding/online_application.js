import React, { Component } from 'react';
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";

import StatusBar from '../OnBoarding/StatusBar'
import CollapsibleItem from '../../CollapsibleItem'
import RoundDecision from "./../OnBoarding/RoundDecision"


class OnlineApplication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientIndiv: {
                name: { surname: "", firstName: "sadfas" }
                , recipient: [{ name: { surname: "", firstName: "" } }]
                , Status: "Onboarding"
                , careNeeds: null
                , careServices: null
                , interests: null
            },
            isLoading: true
        }
    }


    render() {
        if (this.state.isLoading) {
            return(
                <div>Loading...</div>
            )
        }

        return (
            <div className="container">
                {this.state.clientIndiv.name.firstName}
            </div>
        )
    }
}


export default OnlineApplication
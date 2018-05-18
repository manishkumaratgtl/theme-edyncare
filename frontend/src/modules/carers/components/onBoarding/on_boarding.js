import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Auth from '../../../../components/auth/auth';

const auth = new Auth();
class Onboarding extends Component {
    render() {
        const userID = auth.getUserId();
        const URL = "/portal-carer/onboarding/schedule-interview/" + userID + "";

        return (
            <div className="container">Welcome to the carer portal onboarding page
                <NavLink className="nav-link" to={URL}>Schedule interview</NavLink>
                <NavLink className="nav-link" to="/portal-carer/onboarding/document-vetting">Onfido vetting</NavLink>
                <NavLink className="nav-link" to="/portal-carer/onboarding/sign-contract">Sign employment contract</NavLink>
                <NavLink className="nav-link" to="/portal-carer/onboarding/complete">Complete</NavLink>
            </div>
        )
    }
}

export default Onboarding
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container no-gutter">Welcome to the adminPortal dashboard
                <NavLink className="nav-link" to="/portal-admin">portal-admin</NavLink>
                <NavLink className="nav-link" to="/portal-admin/carers">portal-admin/carers</NavLink>
                <NavLink className="nav-link" to="/portal-admin/carers/individual">portal-admin/carers/individual</NavLink>
                <NavLink className="nav-link" to="/portal-admin/carers/interviews">portal-admin/carers/interviews</NavLink>
                <NavLink className="nav-link" to="/portal-admin/clients">portal-admin/clients</NavLink>
                <NavLink className="nav-link" to="/portal-admin/clients/interviews">portal-admin/clients/interviews</NavLink>
                <NavLink className="nav-link" to="/portal-admin/contracts/signed-contracts">portal-admin/signed/interviews</NavLink>
            </div>
        )
    }
}
import React, { Component } from 'react';
// import Auth from './../../../components/auth/auth';
import { NavLink } from "react-router-dom";

export default class CarerMenu extends Component {
    renderMenus() {
        let menuArr = [
            {
                'to': '/portal-carer',
                'label': 'Dashboard'
            }, {
                'to': '/portal-carer/profile',
                'label': 'My profile'
            }, {
                'to': '/portal-carer/onboarding',
                'label': 'On-boarding'
            }, {
                'to': '/portal-carer/clients',
                'label': 'Clients'
            }, {
                'to': '/portal-carer/payments',
                'label': 'Payments'
            }, {
                'to': '/portal-carer/visit/upcoming-visits',
                'label': 'Visit'
            }
            //,{
            //    'to':'/portal-carer/carer-sign-contract',
            //    'label': 'Carer-client contract'
            //}
        ];
        return menuArr.map((obj, index) => {
            return <NavLink key={index} to={obj.to} className="nav-item nav-link">{obj.label}</NavLink>;
        });
    }
    render() {
        // const auth = new Auth();
        // const { isAuthenticated, login, logout } = auth; // userHasAccess
        return (
            <div className="nav flex-sm-column flex-column h-100 ">
                {this.renderMenus()}
                {/* {
                    !isAuthenticated() && (
                        <a className="nav-link" href="void(0)" onClick={login}>Login</a>
                    )
                }
                {
                    isAuthenticated() && (
                        <a className="nav-link" href="void(0)" onClick={logout}> Logout</a>
                    )
                } */}
            </div>
        )
    }
}

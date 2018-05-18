import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class ClientMenu extends Component {
    renderMenus() {
        let menuArr = [
            {
                'to':'/portal-client',
                'label': 'Dashboard'
            },{
                'to':'/portal-client/carers',
                'label': 'Carers'
            },{
                'to':'/portal-client/care-plans',
                'label': 'Care plans'
            },{
                'to':'/portal-client/my-profile',
                'label': 'My profile'
            },{
                'to':'/portal-client/on-boarding',
                'label': 'On-boarding'
            },{
                'to':'/portal-client/payments',
                'label': 'Payments'
            },
        ];
        return menuArr.map((obj, index) => {
            return <NavLink key={index} to={obj.to} className="nav-item nav-link">{obj.label}</NavLink>;
        });
    }
    render() {
        return (
            <div className="nav flex-sm-column flex-column h-100 ">
                {this.renderMenus()}
            </div>
        )
    }
}

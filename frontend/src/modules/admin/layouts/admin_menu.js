import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class AdminMenu extends Component {
    
    renderMenus() {
        let menuArr = [
            {
                'to':'/portal-admin',
                'label': 'Dashboard'
            },{
                'to':'/portal-admin/schedule',
                'label': 'Schedule'
            },{
                'to':'/portal-admin/carers',
                'label': 'Carers'
            },{
                'to':'/portal-admin/recipients',
                'label': 'Recipients'
            },{
                'to':'/portal-admin/clients',
                'label': 'Clients'
            },{
                'to':'/portal-admin/alerts',
                'label': 'Alerts'
            },{
                'to':'/portal-admin/reports',
                'label': 'Reports'
            },{
                'to':'/portal-admin/payroll',
                'label': 'Payroll/Billing'
            },{
                'to':'/portal-admin/onBoarding',
                'label': 'On Boarding'
            },{
                'to':'/portal-admin/support',
                'label': 'Support'
            }
        ];
        return menuArr.map((obj, index) => {
            return <NavLink key={index} to={obj.to} className="nav-item nav-link">{obj.label}</NavLink>;
        });
    }

    render() {
        return (
            <div className="nav flex-sm-column flex-column h-100  text-center">
                {this.renderMenus()}
            </div>
        )
    }
}



export default AdminMenu

import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class ApplyToday extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <h2>Become a carer</h2>
                    <br/>
                    <h3>Join our Edyn.Care Community</h3>
                    <br/>
                    <h3><strong>Work when and where you so wish</strong></h3>
                    <br/>
                    <NavLink className="btn btn-secondary" to="/carer-on-boarding">Apply Today</ NavLink>
                    <br/><br/>
                    <h3>
                    Edyn.Care’s mission is to empower you to provide high quality care, and to ensure you receive the rewards you deserve. 
                    We enable you to take control of your own working hours and give you ongoing support when you need it. 
                    For too long you have been taken for granted by agencies. We’re out to change this!
                    </h3>
                </div>
                <div className="col-md-1"></div>
            </div>
        )
    }
}

export default ApplyToday
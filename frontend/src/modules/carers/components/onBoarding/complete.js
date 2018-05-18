import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import WizardCarerOnBoarding from "./wizard_carer_on_boarding"

class Complete extends Component {

    render() {

        return (
            <div>
                <WizardCarerOnBoarding page= {4} title={false}/>
                <div className="container">
                    <h3>Congratulations you have completed the Carer application</h3>
                    <h3>Welcome aboard</h3>
                </div>
            </div>
        );
    }
}



export default Complete;
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


import WizardCarerOnBoarding from "./wizard_carer_on_boarding"

class DocumentVetting extends Component {


    render() {
        var style = {
            minWidth: '320px',
            height: '580px'
        };
        return (
            <div>
                <WizardCarerOnBoarding page= {2} title={false}/>
                <div className="container">
                    <div className="row text-center mb-4">
                        <div className="col-md-12 p-4">
                            <div className="error-template">
                                <h2>Document vetting</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h3>We have created an application with onfido to vet your documents. Please follow the link on their email.</h3>
                        <h3>The following documents have been request:</h3>
                    </div>
                </div>
            </div>
        );
    }
}



export default DocumentVetting;
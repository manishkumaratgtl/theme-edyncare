import React, { Component } from 'react';

class EnsureQuality extends Component {
    render() {
        return (
        <div className= "p-5 m-auto color5" style= {{position: "relative"}}>

        <div style= {{ zIndex: "-1"}}>
            <img src={require('../../../../images/designAssets/textures/public/tright_corner3.png')} className="background-top-right" alt="Edyn Care" />
            <img src={require('../../../../images/designAssets/textures/public/bright_corner3.png')} className="background-bottom-right big_only" style= {{bottom: "-5px"}} alt="Edyn Care" />
        </div>

        <div className="row no-gutter justify-content-center">
        <div className="col-md-11 m-auto no-gutter"> 
            <h1 className="pt-4 pb-4">We ensure quality through:</h1>
            <div className="row justify-content-between pt-4">
                <div className="col-8 col-md-3">
                
                    <h2>Selecting the Top 5%</h2>
                    <p>We only select the best to become Edyn Carers by using behavioural and skill-based interviews to identify Edyn standard carers.</p>
                </div>
                <div className="col-8 col-md-3">
                    
                    <h2>Meeting our carers</h2>
                    <p>All our carers go through a stringent vetting process which includes coming to meet the team at our Head office in London.</p>
                </div>
                <div className="col-8 col-md-3">
                    
                    <h2>Background checks</h2>
                    <p>Every carer’s background and driving records are screened with our partner Onfido.</p>
                </div>
            
            </div>
            <div className="row justify-content-between pt-4">
                <div className="col-8 col-md-3">
                    
                    <h2>Personal development</h2>
                    <p>Carers receive training and one-on-one coaching from their regional manager.</p>
                </div>
                <div className="col-8 col-md-3">
            
                    <h2>Thoughtful technology</h2>
                    <p>Our carer app helps carers deliver a better service and access support when they need it. Utilising machine learning. </p>
                </div>
                <div className="col-8 col-md-3">
                </div>
            </div>
            <div className="row text-center pt-4">
                <div className="col text-center py-4">
                    <h2>98% of Edyn’s carers would recommend Edyn </h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default EnsureQuality
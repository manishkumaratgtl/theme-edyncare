import React, { Component } from 'react';

class WizardCarerOnBoarding extends Component {
    render() {
        return (
            <div className="row no-gutter text-center justify-content-center">
                
                <div className=" text-center col-10 col-lg-7 no-gutter justify-content-center ">
                    {
                    (this.props.title!== false) && <div className="ObPageTitle">
                        <h2>Carer Application</h2>
                    </div>
                    }
                  
                    <div class="containerProgress col-12 no-gutter">
                        <ul class="progressbar row no-gutter">
                            <li className={
                                this.props.page === 1 ? "active" : 
                                    this.props.page > 1 ? "completed" : "disabled"
                                }>
                                <a href="#step1" className="" data-toggle="tab">Online</a>
                                <a href="#step1" className="d-none d-lg-inline" data-toggle="tab"> Application</a>
                            </li>
                            <li className={
                                this.props.page === 2 ? "active" : 
                                    this.props.page > 2 ? "completed" : "disabled"
                                }>
                                    <a href="#step2" className="d-none d-lg-inline" data-toggle="tab">In-person</a>
                                    <a href="#step2" className="" data-toggle="tab"> Interview</a>
                            </li>
                            <li className={
                                this.props.page === 3 ? "active" : 
                                    this.props.page > 3 ? "completed" : "disabled"
                                }>
                                    <a href="#step3" className="" data-toggle="tab">Document</a>
                                    <a href="#step3" className="d-none d-lg-inline" data-toggle="tab"> Verification</a>
                            </li>
                            <li className={
                                this.props.page === 4 ? "active" : 
                                    this.props.page > 4 ? "completed" : "disabled"
                                }>
                                    <a href="#step4" className="d-none d-lg-inline" data-toggle="tab">Sign</a>
                                    <a href="#step4" className="" data-toggle="tab"> Contract</a>
                            
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default WizardCarerOnBoarding
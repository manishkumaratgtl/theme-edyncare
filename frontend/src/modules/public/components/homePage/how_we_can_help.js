import React, { Component } from 'react';

class HowWeCanHelp extends Component {
    render() {
        return (
        <div className= "m-auto color7" style= {{position: "relative"}}>
            {/*
            <svg viewBox="0 0 1300 050" style= {{bottom: "-100px"}}  >
                <path d="M000,10 Q300, 0 600, 20 T1400 0"
                fill="#E4F4E9" stroke="#000" stroke-width="0px" />
            </svg>
            */}

            <div style= {{ zIndex: "-1"}}>
                <img src={require('../../../../images/designAssets/textures/public/bleft_corner6.png')} style= {{bottom: "-70px"}}  className="background-bottom-left" alt="Edyn Care" />
            </div>

            <div className="row no-gutter justify-content-center" style= {{paddingTop: "39px", paddingBottom: "39px"}}>
            <div className="col-10 no-gutter"> 
            <div className="row no-gutter justify-content-between"  >
                <div className="col-md-6 no-gutter" > 
                    <h1 className="pb-2" style= {{paddingTop: "120px"}}>How We Can Help</h1>
                    <h3 style= {{marginRight: "55px", paddingTop: "27px"}}>Whether is support with day-to-day living or slightly more hands-on care you’re looking for, we aim to help everybody get the very most from their later years. We know need vary, so we adapt our care to every single person’s way of life. 

                    </h3>
                    <div className="row" style= {{paddingTop: "27px"}}>
                        <div className="col-7">
                        <h3><font className= "hbold">Daily needs:</font></h3>
                            <ul className= "c8-dot-list" style= {{paddingTop: "27px"}}>
                                <li><h3>Personal care</h3></li>
                                <li><h3>Meal preparation</h3></li>
                                <li><h3>Personal mobility</h3></li>
                                <li><h3>Exercise</h3></li>
                                <li><h3>Transportation</h3></li>
                                <li><h3>Companionship</h3></li>
                                <li><h3>Medication reminders</h3></li>
                                <li><h3>Connect with your passions</h3></li>
                                <li><h3>Do the activities you love</h3></li>
                            </ul>
                            </div>
                            <div className="col">
                                <h3><font className= "hbold">More complex needs:</font></h3>
                                <ul className= "c8-dot-list" style= {{paddingTop: "27px"}}>
                                    <li><h3>Palliative care</h3></li>
                                    <li><h3>Dementia care</h3></li>
                                    <li><h3>Respite care</h3></li>
                                    <li><h3>Post-discharge care</h3></li>
                                    <li><h3>Disability care</h3></li>
                                    <li><h3>Cancer care</h3></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row" style= {{paddingTop: "27px", paddingBottom: "133px"}}>
                            <h3>“Edyn helped me connect with my passions and do the activities I love”</h3>
                        </div>
                    </div>
                    <div className="col-md-6 no-gutter my-auto text-right" style= {{ right: "-10.3%" }} >
                        <img src={require('../../../../images/photos/women_gardening.png')} className="background-right" alt="Edyn Care" height="786px" width="600px"/>
                    </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default HowWeCanHelp
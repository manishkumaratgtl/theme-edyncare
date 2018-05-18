import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class HowItWorks extends Component {
    render() {
        return (
            <div>
                <div className= "m-auto color5" style= {{position: "relative"}}>

                <div style= {{ zIndex: "-1"}}>
                    <img src={require('../../../../images/designAssets/textures/public/edyn_leaves7b.png')} className="background-top-right mw-100" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/edyn_leaves7bl.png')} className="background-bottom-left mw-100" alt="Edyn Care" />
                </div> 

            <div className="row no-gutter justify-content-center" style= {{paddingTop: "142px", paddingBottom: "142px"}}>
                <div className="col-10 no-gutter no-gutter"> 
                    <div className="row no-gutter justify-content-between"  >
                    <div className="col-12 no-gutter no-gutter my-auto" >
                    <h1 >How it works</h1>
                        <div className="row no-gutter justify-content-between">
                        
                            <div className="col-12 col-md-3 no-gutter">
                                <h2 style= {{paddingTop: "40px", fontSize: "18px"}}>01</h2>
                                <h2 style= {{paddingTop: "10px", fontSize: "26px"}}>Talk to us</h2>
                                <p style= {{marginRight: "50px", paddingTop: "10px"}}>Give one of our care specialists a call to chat everything through on 0800 368 7442. </p>
                            </div>
                            <div className="col-12 col-md-3 no-gutter">
                                <h2 style= {{paddingTop: "40px", fontSize: "18px"}}>02</h2>
                                <h2 style= {{paddingTop: "10px", fontSize: "26px"}}>Meet us</h2>
                                <p style= {{marginRight: "50px", paddingTop: "10px"}}>One of our care managers will visit you at home and draw up a personalised care plan.</p>
                            </div>
                            <div className="col-12 col-md-3 no-gutter">
                                <h2 style= {{paddingTop: "40px", fontSize: "18px"}}>03</h2>
                                <h2 style= {{paddingTop: "10px", fontSize: "26px"}}>Choose your carer</h2>
                                <p style= {{marginRight: "50px", paddingTop: "10px"}}>We’ll tailor a list of carers, allowing you to choose your favourite.</p>
                            </div>
                            <div className="col-12 col-md-3 no-gutter">
                                <h2 style= {{paddingTop: "40px", fontSize: "18px"}}>04</h2>
                                <h2 style= {{paddingTop: "10px", fontSize: "26px"}}>We’ll continue to help</h2>
                                <p style= {{marginRight: "50px", paddingTop: "10px"}}>Once care beings, we’ll continue our support you through your journey - in person, online and over the phone.</p>
                            </div>                   
                        </div>
                        </div>
                        </div>       
                        </div> 
                        </div> 
                </div>

                <div className= "m-auto color4" style= {{position: "relative"}}>

                    <div style= {{ zIndex: "-1"}}>
                        <img src={require('../../../../images/designAssets/textures/public/edyn_leaves8a.png')} className="background-bottom-left mw-100" alt="Edyn Care" />
                        <img src={require('../../../../images/designAssets/textures/public/edyn_leaves8b.png')} className="background-top-right mw-100" alt="Edyn Care" />
                        <img src={require('../../../../images/designAssets/textures/public/bleft_corner8.png')} style= {{bottom: "-10px"}} className="background-bottom-left mw-100" alt="Edyn Care" />
                        <img src={require('../../../../images/designAssets/textures/public/bright_corner8.png')} style= {{bottom: "0px"}} className="background-bottom-right mw-100 big_only" alt="Edyn Care" />
                        <img src={require('../../../../images/designAssets/textures/public/tleft_corner8.png')} className="background-top-left mw-100" alt="Edyn Care" />
                        <img src={require('../../../../images/designAssets/textures/public/tleft_corner8_2.png')} className="background-top-left mw-100" alt="Edyn Care" />
                    </div>

            <div className="row no-gutter justify-content-center" style= {{paddingTop: "65px", paddingBottom: "35px"}}>
                <div className="col-10 no-gutter no-gutter"> 
                    <div className="row no-gutter justify-content-between text-center"  >
                        <div className="col-7 pt-5 pb-5 no-gutter" style={{margin: "auto", verticalAlign: "middle"}}>
                            <h1 style={{minHeight: "134px"}}>Let your happy new <br/>homecare journey start here.</h1>
                            <h4 style={{minHeight: "50px"}}>Everything we do starts with listening. Speak to our dedicated care team.</h4>
                            <div className= "row no-gutter justify-content-between text-center">
                            <div style={{margin: "auto", verticalAlign: "middle", minHeight: "90px"}}>
                            <NavLink className="btn btn-edyn-big align-middle white" to="/get-started">Get started</NavLink>
                            </div>
                            </div>
                            <h5>or call: 0800 368 7442</h5>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowItWorks
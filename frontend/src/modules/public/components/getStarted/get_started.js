import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import bgImage from '../../../../images/designAssets/textures/public/getStarted/s1_leaves.png';

class GetStarted extends Component {
    render() {
        var myBG = { background: `url(${bgImage})`, position: "relative" }
        return (
            <div className="row no-gutter" style={myBG}>
                <div className="col-sm-6 order-sm-12 no-gutter" style={{ marginTop: "90px", marginBottom: "70px" }} >
                    <div className="col-sm-8 mt-5 pt-5  no-gutter">
                        <h1 className="mb-5 ml-5 mr-5">Get Started</h1>
                        <p className="text-justify ml-5 mr-5">
                            Everyone’s care requirements are unique. Which is why at Edyn, we are committed to offering a tailored service to each individual. Everything we do starts with listening; understanding your circumstances and needs is key to providing quality care.
                        </p>

                        <NavLink className="btn btn-call white my-3 ml-5 mr-5 py-3 text-center" to="/get-started">Call Us</NavLink>
                    </div>

                </div>
                <div className="col-sm-6 order-sm-1 no-gutter" style={{ marginTop: "90px", marginBottom: "70px" }} align="center">
                    <img src={require('../../../../images/designAssets/textures/public/getStarted/s1_man.png')} className="img-fluid" alt="Edyn Care" />
                </div>
                <img src={require('../../../../images/designAssets/textures/public/tright_corner4.png')} className="background-top-right" alt="Edyn Care" />
                <img src={require('../../../../images/designAssets/textures/public/getStarted/s1_bl.png')} className="background-bottom-left" alt="Edyn Care" />
            </div>
        )
    }
}

export default GetStarted
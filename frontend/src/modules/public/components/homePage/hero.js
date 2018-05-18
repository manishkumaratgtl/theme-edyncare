import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../../../../scss/custom/basic.css'
import '../../../../scss/custom/homepage.css'

class Hero extends Component {
    render() {
        return (
            <div className="m-auto color4" style={{ position: "relative" }}>

                <div style={{ zIndex: "-1" }}>
                    <img src={require('../../../../images/designAssets/textures/public/edyn_leaves1.png')} className="background-top-right" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/bleft_corner1.png')} className="background-bottom-left" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/tright_corner1.png')} className="background-top-right" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/tright_corner1_2.png')} className="background-top-right" style={{ maxHeight: "50%" }} alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/tright_corner1_3.png')} className="background-top-right" style={{ maxHeight: "100%" }} alt="Edyn Care" />
                </div>

                <div className="row no-gutter justify-content-center">
                    <div className="col-10 no-gutter">
                        <div className="row no-gutter justify-content-between py-5 align-items-center">
                            <div className="col-12 col-md-5 no-gutter text-left" >
                                <h1 className="pb-3">Homecare to help you love later life</h1>
                                <h2 className="col-md-7 no-gutter pb-3">Supporting you through every step of your ageing journey</h2>
                                <p><NavLink className="btn btn-edyn-big align-middle white" to="/get-started">Get started</NavLink></p>
                            </div>
                            <div className="col-12 col-md-7 no-gutter ">
                                <img src={require('../../../../images/photos/old_man.png')} className="img-fluid" alt="Edyn Care" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero

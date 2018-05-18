import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class HowItWorks extends Component {
    render() {
        return (
            <div className="row no-gutter text-center justify-content-around color4 w-200" style={{ minHeight: "600px", position: 'relative', zIndex: 0 }}>
                <div className="col-12 pt-5 pb-5 no-gutter" style={{ margin: "auto" }}>
                    <h1>Who is backing us ?</h1>
                    <h4>Find out about the team and who is backing us</h4>
                    <NavLink to="/our-story" className="btn btn-secondary white my-3 py-3">The team</NavLink>
                </div>
                <img src={require('../../../../images/designAssets/textures/public/getStarted/s5_leaves_left.png')} className="background-bottom-left mw-100" alt="Edyn Care" />
                <img src={require('../../../../images/designAssets/textures/public/getStarted/s5_leaves_right.png')} className="background-top-right mw-100" alt="Edyn Care" />
                <img src={require('../../../../images/designAssets/textures/public/bleft_corner8.png')} style={{ bottom: "-10px" }} className="background-bottom-left mw-100" alt="Edyn Care" />
                <img src={require('../../../../images/designAssets/textures/public/getStarted/s5_br.png')} style={{ bottom: "-10px", zIndex: "-2" }} className="background-bottom-right mw-100 big_only" alt="Edyn Care" />
                <img src={require('../../../../images/designAssets/textures/public/getStarted/s5_tl.png')} className="background-top-left mw-100" alt="Edyn Care" />
            </div>
        )
    }
}

export default HowItWorks
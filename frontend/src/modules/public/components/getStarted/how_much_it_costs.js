import React, { Component } from 'react';
import sdf from '../../../../images/designAssets/textures/public/getStarted/s4_bg_center.png'

class HowMuchItCosts extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#FBF8EF", position: "relative" }}>
                <div className="pb-5" style={{ background: `url(${sdf}) no-repeat`, backgroundSize: "100% 100%" }} >
                    <h1 className="text-center pt-5 mb-5 pb-3">How much it costs ?</h1>
                    <div className="row text-center no-gutter pb-5">
                        <div className="col-12 col-sm-12 col-md-1 col-lg-1 no-gutter"></div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 no-gutter">
                            <img className="mb-4" src={require('../../../../images/designAssets/textures/public/getStarted/s4_sun.png')} alt="Edyn Care" />
                            <h4 className="h4">
                                Daytime Carer
                            </h4>
                            <p><strong>2 Hour minimum</strong></p>
                            <h3 className="h3">&pound;17</h3>
                            <small>Per hour</small>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 no-gutter">
                            <img className="mb-4" src={require('../../../../images/designAssets/textures/public/getStarted/s4_sun_half.png')} alt="Edyn Care" />
                            <h4 className="h4">
                                Half a day
                            </h4>
                            <p><strong>6 Hours</strong></p>
                            <h3 className="h3">&pound;17</h3>
                            <small>Per hour</small>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 no-gutter">
                            <img style={{ marginBottom: "36px" }} src={require('../../../../images/designAssets/textures/public/getStarted/s4_moon.png')} alt="Edyn Care" />
                            <h4 className="h4">
                                Overnight
                            </h4>
                            <p><strong>Awake</strong></p>
                            <h3 className="h3">&pound;24</h3>
                            <small>Per hour</small>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 no-gutter">
                            <img style={{ marginBottom: "36px" }} src={require('../../../../images/designAssets/textures/public/getStarted/s4_moon_zzz.png')} alt="Edyn Care" />
                            <h4 className="h4">
                                Overnight
                            </h4>
                            <p><strong>Asleep</strong></p>
                            <h3 className="h3">&pound;24</h3>
                            <small>Per hour</small>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 no-gutter">
                            <img style={{ marginBottom: "36px" }} src={require('../../../../images/designAssets/textures/public/getStarted/s4_house.png')} alt="Edyn Care" />
                            <h4 className="h4">
                                Live in
                            </h4>
                            <p><strong>24 Hours</strong></p>
                            <h3 className="h3">&pound;24</h3>
                            <small>Per hour</small>
                        </div>
                        <div className="col-12 col-sm-12 col-md-1 col-lg-1 no-gutter"></div>

                    </div>
                </div>
            </div >
        )
    }
}

export default HowMuchItCosts;
import React, { Component } from 'react';

import '../../../../scss/custom/basic.css'
import '../../../../scss/custom/homepage.css'

class WhoIs extends Component {
    render() {
        return (
            <div className= "p-5 m-auto color0" style= {{position: "relative"}}>
                <div style= {{ zIndex: "-1"}}>
                    <img src={require('../../../../images/designAssets/textures/public/tleft_corner2.png')} className="background-top-left" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/tleft_corner2_2.png')} className="background-top-left" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/bright_corner2.png')} className="background-bottom-right" alt="Edyn Care" />
                </div>

            <div className="row no-gutter justify-content-center py-3" style={{minHeight: "350px"}}>
                <div className="col-sm-11 col-md-6 pt-5 p-4 text-center justify-content-center m-auto">
                    <img src={require('../../../../images/designAssets/logos/png/edyn_logomark.png')} className= "WWAimg" style={{height:110}} alt="Edyn Care" />
                    <h1>Who we are?</h1>
                    <br />
                    <h2 className="pb-3 mx-auto" style={{maxWidth: "571px"}}>Edyn is a friendly independent homecare service, committed to providing you with personal and professional care.
                    </h2>
                    <h5 className="pb-5 mx-auto" style={{maxWidth: "540px" , fontSize: "16px", 	lineHeight: "26px"}}>We believe that living happily and safely is something we deserve in later life, so we’re here to provide both the human touch and smart technology to tailor our service to your needs throughout this important time.
                    </h5>
                    </div>
                </div> 
            </div>
        )
    }
}

export default WhoIs
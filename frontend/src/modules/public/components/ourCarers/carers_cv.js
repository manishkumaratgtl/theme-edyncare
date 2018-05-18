import React, { Component } from 'react';

class CarerCv extends Component {
    render() {
        return (
            <div className= "p-5 m-auto color0" style= {{position: "relative"}}>
                <div style= {{ zIndex: "-1"}}>
                    <img src={require('../../../../images/designAssets/textures/public/tleft_corner2.png')} className="background-top-left" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/tleft_corner2_2.png')} className="background-top-left" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/bright_corner2.png')} className="background-bottom-right" alt="Edyn Care" />
                </div>

                <div className="row no-gutter justify-content-center pt-5 pb-5" style={{minHeight: "550px"}}>
                <div className="col-sm-10 col-md-12 p-4 text-center justify-content-center m-auto">
                <h1>Carer CV</h1>
                <br />
                <h3>Have you got the skills to become an Edyn.Care carer?
                </h3>
                <h3>Fill out our application form and if your successful, we’ll be in touch
                </h3>
                <div className="p-4" >
                    <img src={require('../../../../images/designAssets/textures/public/ourCarers/cv_example.png')} className="img-fluid img-shadow" alt="Edyn Care" />
                </div>
                </div>
                </div> 
            </div>
        )
    }
}

export default CarerCv
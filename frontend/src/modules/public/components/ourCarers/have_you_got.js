import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class HaveYouGot extends Component {
    render(){
        return(
            <div className= "p-5 m-auto color7" style= {{position: "relative"}}>

            <div style= {{ zIndex: "-1"}}>
            <img src={require('../../../../images/designAssets/textures/public/ourCarers/s4_bl.png')} className="background-bottom-left mw-100" alt="Edyn Care" />
            <img src={require('../../../../images/designAssets/textures/public/ourCarers/s4_br.png')} className="background-bottom-right mw-100" alt="Edyn Care" />
            </div> 

            <div className="row no-gutter text-center justify-content-around" style={{ minHeight: "400px", position: 'relative'}}>
                <div className="col-11 col-md-7 pt-5 pb-5 no-gutter" style={{margin: "auto"}}>
                    <h1>Have you got the skills to become an edyn.care carer?</h1>
                    <br/>
                    <h4>Fill out our application form and if your successful, we’ll be in touch.</h4>
                    <br/>
                    <NavLink to="/carer-on-boarding" className="btn btn-secondary white my-3 py-3">Apply here</NavLink>
                </div>
            </div>
            </div>
        )
    }
}

export default HaveYouGot
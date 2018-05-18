import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// class LetUsHelpSS extends Component {
//     render() {
//         return (
//             <div className= "styled-background">
//                 <div className="row text-center p-4 px-5">
//                     <div className="col-md-1"></div>
//                     <div className="col-md-10">
//                         <h2>Let us help</h2>
//                         <br/>
//                         <h3>
//                         Tell us what you’re looking for <br/>
//                         Take a few minutes to tell us about your care needs, and let us do the rest
//                         </h3>

//                         <p><span className="btn btn-secondary">Get started</span></p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

class LetUsHelp extends Component {
    render() {
        return (

                <div className= "p-5 m-auto color4" style= {{position: "relative"}}>

                    <div style= {{ zIndex: "-1"}}>
                        <img src={require('../../../../images/designAssets/textures/public/edyn_leaves8a.png')} className="background-bottom-left mw-100" alt="Edyn Care" />
                        <img src={require('../../../../images/designAssets/textures/public/edyn_leaves8b.png')} className="background-top-right mw-100" alt="Edyn Care" />
                        <img src={require('../../../../images/designAssets/textures/public/bleft_corner8.png')} style= {{bottom: "-10px"}} className="background-bottom-left mw-100" alt="Edyn Care" />
                        <img src={require('../../../../images/designAssets/textures/public/bright_corner8.png')} style= {{bottom: "-10px"}} className="background-bottom-right mw-100 big_only" alt="Edyn Care" />
                        <img src={require('../../../../images/designAssets/textures/public/tleft_corner8.png')} className="background-top-left mw-100" alt="Edyn Care" />
                        <img src={require('../../../../images/designAssets/textures/public/tleft_corner8_2.png')} className="background-top-left mw-100" alt="Edyn Care" />
                    </div> 

                    <div className="row no-gutter text-center justify-content-around" style={{ minHeight: "", position: 'relative'}}>
                        <div className="col-8 pt-5 pb-5 no-gutter" style={{margin: "auto"}}>
                            <h1>Let us help</h1>
                            <h3>Tell us what you’re looking for <br/>
                                Take a few minutes to tell us about your care needs, and let us do the rest</h3>
                            <NavLink to="/our-approach" className="btn btn-secondary white my-3 py-3">Get Started</NavLink>
                            <h4>Or call: 0800 368 7442</h4>
                        </div>
                    </div>
                </div>

 )
}
}

export default LetUsHelp
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class OurCarers extends Component {
    render() {
        return (
            <div className= "p-5 m-auto color7" style= {{position: "relative"}}>
                
                <div style= {{ zIndex: "-1"}}>
                    <img src={require('../../../../images/designAssets/textures/public/ourCarers/s1_tr.png')} className="background-top-right" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/ourCarers/s1_bl.png')} className="background-bottom-left" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/ourCarers/s1_leaves_right.png')} className="background-top-right" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/ourCarers/s1_right.png')} className="background-top-right" alt="Edyn Care" />
                </div>

            <div className="row no-gutter justify-content-between" >
                <div className="col-4 mx-auto my-auto pt-5 pb-5 "> 
                    <img src={require('../../../../images/designAssets/textures/public/ourCarers/s1_image.png')} className="img-fluid" alt="Edyn Care" />
                </div>
                <div className= "col-6 text-left my-auto">
                    <h1>Our carers</h1>
                    <div className="row no-gutter justify-content-left pt-4">
                        <div className="col-10 no-gutter text-left">
                            <h3>The best carers come to Edyn.Care, and we only select 5%. </h3>
                            <h3>We believe that better treated carers leads to better care. That is why we 
                            treat our carers fairly. Like our clients, each of our carers are unique, 
                            with a range of experience, qualifications and interests. Consequently, we 
                            are sure we can find the right carer for you.
                            </h3>
                        </div>
                    </div>
                    <div className= "pt-4">
                        <NavLink className="align-middle btn btn-edyn-white white py-3" to="/">Find your perfect carer</NavLink>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}

export default OurCarers
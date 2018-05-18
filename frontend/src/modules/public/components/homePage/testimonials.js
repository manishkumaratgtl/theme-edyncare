import React, { Component } from 'react';

class Testimonials extends Component {
    render() {
        return (
            <div className= "m-auto color0" style= {{position: "relative"}}>

                <div style= {{ zIndex: "-1"}}>
                    <img src={require('../../../../images/designAssets/textures/public/tright_corner4.png')} className="background-top-right" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/bleft_corner4.png')} style= {{bottom: "-10px"}} className="background-bottom-left" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/edyn_leaves4.png')} className="background-leaves mw-100" alt="Edyn Care" />
                </div>

            <div className="row no-gutter justify-content-center" style={{paddingTop: "100px", paddingBottom: "100px"}}>
            <div className= "col-10 no-gutter">
            <div className="row no-gutter justify-content-between align-items-center ">
                <div className="col-md-6 no-gutter my-auto pt-5 pb-5 "> 
                    <img src={require('../../../../images/photos/three_people_sat.png')} className="img-fluid" alt="Edyn Care" />
                </div>
                <div className="col-md-4 no-gutter justify-content-center mx-auto my-auto">
                    <div className= "row no-gutter" style={{paddingBottom: "24px"}}>
                        <h3 className= "colorT8 text-md-left"><font className="colorT8 lightT" style={{fontSize: "18px", paddingBottom: "24px"}}>Our customers</font></h3>
                    </div>
                    <div className= "row no-gutter" style={{paddingBottom: "29px"}}>
                        <h1 className= "text-md-left">Andrew</h1>
                    </div>
                    <div className= "row no-gutter" style={{maxWidth: "358px", paddingBottom: "29px"}}>
                    <h3 className= "pb-5 text-md-left" style={{lineHeight: "26px"}}>“Nullam id dolor id nibh ultricies vehicula ut id elit. 
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
                        Nulla vitae elit libero, a pharetra augue.
                        Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.”</h3>   
                    </div>
                </div>
                </div>
                </div>
                {/* Carousel Mechanism will be placed here.
                <div className="text-center">
                    <h3 class="pt-10 mx-5 text-dark  d-inline-block" href="#myCarousel" data-slide="prev"> &lt; </h3>
                    <h3 class="pt-10 mx-5 text-dark  d-inline-block" href="#myCarousel" data-slide="next"> &gt; </h3>
                </div> */}

            </div>
        </div>
        )
    }
}

export default Testimonials
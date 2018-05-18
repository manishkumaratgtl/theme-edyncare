import React, { Component } from 'react';
import CTAButton from '../global/cta_button';

class Apply extends Component {
    
    render() {
        return (
<div className= "p-5 m-auto color7" style= {{position: "relative"}}>
<div style= {{ zIndex: "-1"}}>
    <img src={require('../../../../images/designAssets/textures/public/tleft_corner2.png')} className="background-top-left" alt="Edyn Care" />
    <img src={require('../../../../images/designAssets/textures/public/tleft_corner2_2.png')} className="background-top-left" alt="Edyn Care" />
    <img src={require('../../../../images/designAssets/textures/public/bright_corner2.png')} className="background-bottom-right" alt="Edyn Care" />
</div>

<div className="row no-gutter justify-content-center pt-5 pb-5" style={{minHeight: "400px"}}>
<div className="col-sm-10 col-md-8 p-4 text-center justify-content-center m-auto">
    <h1>Are you an experienced carer?</h1>
    <div className="col-sm-8 col-md-6 p-4 text-center justify-content-center m-auto">
        <p>We’re building a dedicated carer community and we’d love to hear from you.</p>
    </div>
<CTAButton>Apply here</CTAButton>
</div>
</div> 
</div>
     )
    }
}

export default Apply
import React, { Component } from 'react';


class CareersComp extends Component {
    render() {
        return (
<div className= "p-5 m-auto color0" style= {{position: "relative"}}>
<div style= {{ zIndex: "-1"}}>
    <img src={require('../../../../images/designAssets/textures/public/tleft_corner2.png')} className="background-top-left" alt="Edyn Care" />
    <img src={require('../../../../images/designAssets/textures/public/tleft_corner2_2.png')} className="background-top-left" alt="Edyn Care" />
    <img src={require('../../../../images/designAssets/textures/public/bright_corner2.png')} className="background-bottom-right" alt="Edyn Care" />
</div>

<div className="row no-gutter justify-content-center pt-5 pb-5" style={{minHeight: "400px"}}>
<div className="col-sm-10 col-md-6 p-4 text-center justify-content-center m-auto">
    <img src={require('../../../../images/designAssets/logos/png/edyn_logomark.png')} className= "WWAimg" style={{height:100}} alt="Edyn Care" />
    <h1>Careers</h1>
    <br />
    <h3>Edyn is growing
    </h3>
    <h3>We believe that living happily and safely is something we deserve in later life, so we’re here to provide both the human touch and smart technology to tailor our service to your needs throughout this important time.
    </h3>
    <h3>We’re building an amazing team to transform the care industry, so if you’d like to join our exciting journey, we’d love to hear from you.
    </h3>
    </div>
</div> 
</div>
)
}
}


export default CareersComp
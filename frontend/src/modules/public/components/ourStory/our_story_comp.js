import React, { Component } from 'react';


class OurStoryComp extends Component {
    render() {
        return (
<div className="p-5 m-auto color4" style={{ position: "relative" }}>

<div style={{ zIndex: "-1" }}>
    <img src={require('../../../../images/designAssets/textures/public/edyn_leaves1.png')} className="background-top-right" alt="Edyn Care" />
    <img src={require('../../../../images/designAssets/textures/public/tright_corner1.png')} className="background-top-right" alt="Edyn Care" />
    <img src={require('../../../../images/designAssets/textures/public/tright_corner1_2.png')} className="background-top-right" alt="Edyn Care" />
    <img src={require('../../../../images/designAssets/textures/public/tright_corner1_3.png')} className="background-top-right" style={{ maxHeight: "100%" }} alt="Edyn Care" />
</div>


<div className="row no-gutter justify-content-center">
    <div className="col-md-5 justify-content-center mx-auto my-auto pt-4">
        <h1>A little more about us</h1>
        <br/>
        <h2>
            We’re Jonny and Oliver, the co-founders of Edyn.Care 
        </h2>
        <h2>
            Two friends who used to work in politics and finance before leaving to start Edyn. 
        </h2>
    </div>
    <div className="col-md-4 mx-auto my-auto pt-5 pb-5">
        <img src={require('../../../../images/designAssets/textures/public/ourStory/s1_image.png')} className="img-fluid" alt="Edyn Care" />
    </div>
</div>

</div>
 )
}
}

export default OurStoryComp;
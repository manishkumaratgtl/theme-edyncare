import React, { Component } from 'react';
import '../../../../scss/custom/basic.css';
import '../../../../scss/custom/homepage.css';

class ComeMake extends Component {
    render() {
        return (
<div className="p-5 m-auto color5" style={{ position: "relative" }}>

<div style={{ zIndex: "-1" }}>
<img src={require('../../../../images/designAssets/textures/public/edyn_leaves1.png')} className="background-top-right" alt="Edyn Care" />
<img src={require('../../../../images/designAssets/textures/public/tright_corner1.png')} className="background-top-right" alt="Edyn Care" />
</div>


<div className="row no-gutter justify-content-center">
    <div className="col-md-6 justify-content-center mx-auto my-auto pt-4">
        <h1 className="pb-4">Come make care better</h1>
        <h3 className="pb-4">edyn.care is built on compassion, consistency and technology. You’ll be part of a passionate and fast growing team who are 
                             committed to collaborating, constantly improving and having some fun while they’re at it.<br/> 
        </h3>
        <h3 className="pb-4">
                            We all bring something different to the table, but are united in our commitment to delivering an impeccable experience 
                            for our clients and having a positive impact on our world. </h3>
    </div>
    <div className="col-md-4 mx-auto my-auto pt-5 pb-5">
        <img src={require('../../../../images/photos/old_man.png')} className="img-fluid" alt="Edyn Care" />
    </div>
</div>

</div>
)
}
}

export default ComeMake

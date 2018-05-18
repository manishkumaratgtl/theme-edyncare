import React, { Component } from 'react';


class OurAdvisors extends Component {
    render() {
        return (

<div className= "p-5 m-auto color7" style= {{position: "relative"}}>
<div style= {{ zIndex: "-1"}}>
</div>
    <div className="row no-gutter justify-content-center">
        <div className="col-md-7 m-auto no-gutter"> 
            <h1 className="pt-4 pb-4 text-center">Our advisors</h1>
            <div className="row justify-content-around text-center">
                <div className="col-6 col-md-2">
                    <img alt='Facebook' style= {{ maxWidth: 120}} src={require('../../../../images/designAssets/textures/public/ourStory/s3_profile.png')} className="img img-responsive imageSizeAvatar"/>
                    <h2>Lord David Prior</h2>
                    <p>ex-chairman of Care Quality Commission</p>
                </div>
                <div className="col-6 col-md-2">
                <img alt='Facebook' style= {{ maxWidth: 120}} src={require('../../../../images/designAssets/textures/public/ourStory/s3_profile.png')} className="img img-responsive imageSizeAvatar" />
                    <h2>Simon Devonshire</h2>
                    <p>UK government entrepreneur in residence </p>
                </div>
                <div className="col-6 col-md-2">
                <img alt='Facebook' style= {{ maxWidth: 120}} src={require('../../../../images/designAssets/textures/public/ourStory/s3_profile.png')} className="img img-responsive imageSizeAvatar" />
                    <h2>Ian <br/> Smith</h2>
                    <p>ex-chairman of Four Seasons Care Group </p>
                </div>
            </div>      
        </div>
    </div> 
</div>
        )
    }
}

export default OurAdvisors
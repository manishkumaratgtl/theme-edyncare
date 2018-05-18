import React, { Component } from 'react';

class WhyWe extends Component {
    render() {
        return (
            <div className= "m-auto color4" style= {{position: "relative"}}>
                
                {/*<svg className= "no-gutter" style= {{top: "-20px"}} viewBox="0 0 1400 075" >
                    <path d="M000,000
                        Q500, 50 1200,050
                        T1400 000"
                    fill="green" stroke="#000" stroke-width="2px" />
                </svg>*/}   

                <div style= {{ zIndex: "-1"}}>                    
                    <img src={require('../../../../images/designAssets/textures/public/bleft_corner5.png')} className="background-bottom-left " style={{bottom: "-5px"}} alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/bright_corner5.png')} className="background-bottom-right big_only" style= {{bottom: "-10px"}} alt="Edyn Care" />
                </div>

                <div className="row no-gutter justify-content-center" style={{ paddingTop: "150px", paddingBottom: "142px"}}>
                <div className="col-10 no-gutter" >
                <div className="row no-gutter">
                <div className="col-sm-6 no-gutter"> 
                    <h1>Why We Exist?</h1>
                    </div>
                    <div className="col-md-4 no-gutter justify-content-center mx-auto pb-5 text-sm-left">
                    <h3>For us it’s personal
                    <br/><br/>
                    “While seeking care for our parents, we faced inconsistency, poor choice and frustrated staff, agreeing the care world was overdue an update. So we set up Edyn, with the view that everybody is different, so their acre should be different too. Combining face-to-face matching and simple online management, we strive to offer the most smooth and stress-free home care journey possible.”
                    <br/><br/>
                    <font className= "hbold"> Jonny and Oliver (Founders)</font>
                    </h3>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyWe
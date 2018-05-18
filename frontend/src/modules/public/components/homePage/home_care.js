import React, { Component } from 'react';


class HomeCare extends Component {
    render() {
        return (
            <div className= "m-auto color5" style= {{position: "relative"}}>

                <div style= {{ zIndex: "-1"}}>
                    <img src={require('../../../../images/designAssets/textures/public/tright_corner3.png')} className="background-top-right" alt="Edyn Care" />
                    <img src={require('../../../../images/designAssets/textures/public/bright_corner3.png')} className="background-bottom-right big_only" style= {{bottom: "-5px"}} alt="Edyn Care" />
                </div>

                <div className="row no-gutter justify-content-center" style= {{paddingTop: "103px"}}>
                <div className="col-10 no-gutter"> 
                    <h1 className="text-left" style= {{paddingTop: "4%"}}>Why choose us?</h1>
                    <div className="row no-gutter justify-content-between"  style= {{paddingTop: "36px"}}>
                        <div className="col-12 col-md-4 no-gutter">
                            <img src={require('../../../../images/designAssets/textures/png/hp_flower.png')} style={{height: "46px", paddingBottom: 10}} alt="Edyn Care" />
                            <h2 style= {{fontSize: "28px", 	lineHeight: "56px"}}>Personal</h2>
                            <p style= {{fontSize: "16px", lineHeight: "26px", paddingRight: "50px"}}>Our matching process considers the needs and interests of each person to guarantee the best relationship with their carer.</p>
                        </div>
                        <div className="col-12 col-md-4 no-gutter">
                            <img src={require('../../../../images/designAssets/textures/png/hp_branch.png')} style={{height: "46px", paddingBottom: 10}} alt="Edyn Care" />
                            <h2 style= {{fontSize: "28px", 	lineHeight: "56px"}}>Smart</h2>
                            <p style= {{fontSize: "16px", lineHeight: "26px", paddingRight: "50px"}}>The online platform we use makes it easy to monitor, change and stay in control of your care plan at all times.</p>
                        </div>
                        <div className="col-12 col-md-4 no-gutter">
                            <img src={require('../../../../images/designAssets/textures/png/hp_flower2.png')} style={{height: "46px", paddingBottom: 10}} alt="Edyn Care" />
                            <h2 style= {{fontSize: "28px", 	lineHeight: "56px"}}>Professional</h2>
                            <p style= {{fontSize: "16px", lineHeight: "26px", paddingRight: "50px"}}>We only select the top 5% of carers, who we assess based on behavioural, skills-based and face-to-face interviews. </p>
                        </div>
                    
                    </div>
                    <div className="row no-gutter justify-content-between" style= {{paddingTop: "4%", paddingBottom: "108px", }}>
                        <div className="col-12 col-md-4 no-gutter">
                            <img src={require('../../../../images/designAssets/textures/png/hp_sun.png')} style={{height: "46px", paddingBottom: 10}} alt="Edyn Care" />
                            <h2 style= {{fontSize: "28px", 	lineHeight: "56px"}}>Responsive</h2>
                            <p style= {{fontSize: "16px", lineHeight: "26px", paddingRight: "50px", minHeight: "133px"}}>We know that care needs can change at any time, so we’ll be on hand to help if this should ever happen.</p>
                        </div>
                        <div className="col-12 col-md-4 no-gutter">
                        <img src={require('../../../../images/designAssets/textures/png/hp_sun2.png')} style={{height: "33px", paddingTop: 13, paddingBottom: 10}} alt="Edyn Care" />
                            <h2 style= {{fontSize: "28px", 	lineHeight: "56px"}}>Consistent</h2>
                            <p style= {{fontSize: "16px", lineHeight: "26px", paddingRight: "50px", minHeight: "133px"}}>You will only see the carers you’ve specially chosen - and we’ll check in with you each month to make sure you’re happy.</p>
                        </div>
                        <div className="col-12 col-md-4 no-gutter">
                        <img src={require('../../../../images/designAssets/textures/png/hp_flower3.png')} style={{height: "46px", paddingBottom: 10}} alt="Edyn Care" />
                            <h2 style= {{fontSize: "28px", 	lineHeight: "56px"}}>Fair</h2>
                            <p style= {{fontSize: "16px", lineHeight: "26px", paddingRight: "50px", minHeight: "133px",}}>Our approach is helping carers receive up to 40% more than previously. We look after our carers, so they can look after you.</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default HomeCare

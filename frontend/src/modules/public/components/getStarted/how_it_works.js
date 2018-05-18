import React, { Component } from 'react';
import leftBGImage from '../../../../images/designAssets/textures/public/getStarted/s2_leaves_left.png';
import rightBGImage from '../../../../images/designAssets/textures/public/getStarted/s2_leaves_right.png';

class HowItWorks extends Component {
    render() {
        return (
            <div className="row pt-5 pb-5 no-gutter" style={{ background: "#ECF3F7" }}>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-5 mb-5 no-gutter">
                    <h1 className="ml-5 mt-5">How it works </h1>
                </div>
                <div className="row col-sm-6 no-gutter" style={{
                    background: `url(${leftBGImage}) no-repeat`
                }}>

                    <div className="col-12 col-sm-6 no-gutter">
                        <h1 className="ml-5 ">01</h1>
                        <h3 className="h3  ml-5">Lets chat</h3>

                        <h4 className="text-justify ml-5 mr-5">
                            speak to one of our helpful, highly-trained care specialists, based in our London office on 0800 368 7442.
                    </h4>
                    </div>
                    <div className="col-12 col-sm-6 no-gutter">

                        <h1 className="ml-5">02</h1>
                        <h3 className="h3  ml-5">Lets Meet</h3>
                        <h4 className="text-justify ml-5 mr-5">
                            one of our care managers will come to your home and draw up a personalised care plan.
                    </h4>
                    </div>
                </div>
                <div className="row col-sm-6 no-gutter" style={{
                    background: `url(${rightBGImage}) no-repeat`
                }}>
                    <div className="col-12 col-sm-6 no-gutter">
                        <h1 className="ml-5">03</h1>
                        <h3 className="h3 ml-5">You Choose</h3>
                        <h4 className="text-justify ml-5 mr-5">
                            we’ll devise a bespoke list of carers most suited to your needs and interests, allowing you to choose the most fitting.
                    </h4>
                    </div>
                    <div className="col-12 col-sm-6 no-gutter">
                        <h1 className="ml-5 mr-5">04</h1>
                        <h3 className="h3 ml-5 mr-5">Carer Stats</h3>
                        <h4 className="text-justify ml-5 mr-5">
                            your family receives the peace of mind they deserve through our cutting edge platform, while our care specialists continue to monitor the care.
                    </h4>
                    </div>
                </div>
            </div >
        )
    }
}

export default HowItWorks
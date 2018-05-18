import React, { Component } from 'react';

class HowWeUseTechnology extends Component {
    render() {
        return (
            <div className="row no-gutter justify-content-around color5 p-5 m-auto">
                <div className="row p-4">
                    <h1>How We Use Technology</h1>
                </div>
                <div className="row">
                <div className="col-5">
                    
                    <h3>For us technology will never replace our carers, however it does support the work they do 
                        by providing a simple and effective means of monitoring care. We believe technology can 
                        be used to give you the peace of mind you deserve. Our online care platform allows you to 
                        get updates on your loved ones’ care and receive peace of mind through the touch of a 
                        button.</h3>
                    <h3>Your personal dashboard - access your secure health dashboard online at any time. </h3>
                    <h3>Real-time updates on your care - find out when your carer arrives, departs and the support they provided. </h3>
                    <h3>We take security very seriously and work hard to make sure your have complete control over your data.</h3>
                </div>
                <div className="col-5">
                    {/* image to placed here  */}
                    </div>
                    </div>
            </div>
        );
    }
}

export default HowWeUseTechnology

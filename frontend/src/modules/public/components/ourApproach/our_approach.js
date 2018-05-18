import React, { Component } from 'react';
import '../../../../scss/custom/Public.css'; 

class OurApproach extends Component {
    render() {
        return (
            <div className= "p-5 m-auto">
                <div className= "row no-gutter justify-content-center" >
                    <div className= "col text-left">
                        <h1>Our approach</h1>
                        <h4>Everything we do starts with listening. </h4>
                    </div>
                </div>
                <div className="row no-gutter justify-content-left">
                    <div className="col-lg-8 text-left">
                        <h3>By listening to your circumstances and needs, we create a bespoke care 
                            service tailored to you and your family. We are then able to match you with 
                            your perfect carers: those that not only meet your care needs, but also share 
                            similar interests and pastimes.
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurApproach
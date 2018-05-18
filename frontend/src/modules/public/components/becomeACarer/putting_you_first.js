import React, { Component } from 'react';

class PuttingYouFirst extends Component {
    render() {
        return (
            <div className= "p-4">
                <h2 className="text-center">Putting You First</h2>
                <h3 className="text-center p-4">Our benefits</h3>
                <div className="row container-fluid">
                    <div className="col-sm-6">
                        <h3><strong>A fair deal</strong></h3>
                        <p>We keep our costs down, so we can give you the rewards you deserve.</p>
                    </div>
                    <div className="col-sm-6">
                    <h3><strong>Flexibility</strong></h3>
                        <p>We help you work when you want and manage your own schedule. Working during the day or at night, on weekdays or weekends.</p>
                    </div>
                    <div className="col-sm-6">
                    <h3><strong>Work close to home</strong></h3>
                        <p>We help you find clients who live close to you - no longer a 50 minute commute.</p>
                    </div>
                    <div className="col-sm-6">
                    <h3><strong>Get paid quickly</strong></h3>
                        <p>Get paid straight into your bank account every 7 days and monitor your hours worked online.</p>
                    </div>
                    <div className="col-sm-6">
                    <h3><strong>Join our community</strong></h3>
                        <p>Every carer joins our family and a community of like-minded compassionate workers. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PuttingYouFirst
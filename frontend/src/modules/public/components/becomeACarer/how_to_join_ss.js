import React, { Component } from 'react';

class HowToJoin extends Component {
    render() {
        return (
            <div className="row text-center pb-4 px-5">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                <h2>How to join</h2>
                <div className="blockquote text-left">
                <ol>
                    <li>Fill out our application form - this will take a few minutes and we’ll require you to present proof of your experience and skills.</li>
                    <li>Come meet the team - if we like your application, we’ll get you in for an interview to meet the team and hear a little more about you.</li>
                    <li>Background checks - next we’ll process some background checks with our partner onfido. </li>
                    <li>Out to work - we’ll set you up with our technology and get you out to work as soon possible.</li>
                </ol>
                </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        )
    }
}

export default HowToJoin
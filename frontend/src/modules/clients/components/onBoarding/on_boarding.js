import React, { Component } from 'react';
import CareConsultationSchedule from './care_consultation_schedule';

class OnBoarding extends Component {

    renderDepending(status){
        switch (status) {
            case 'Onboarding' :
                return <div>We are reviewing your application</div>;
            case 'Approved' :
                return <CareConsultationSchedule />
            case 'Active' :
                return <div>On-boarding is complete!</div>
            default:
                return <div>On-boarding is in progress</div>
        }
    }

    render(){
        return(
            <div>
                <h2>Hi, welcome to the client onboarding</h2>
                <CareConsultationSchedule />
            </div>
        )
    }
}

export default OnBoarding
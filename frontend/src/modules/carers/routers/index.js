import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../components/dashboard';
import CarerProfile from '../components/profile/carer_profile';

import Onboarding from '../components/onBoarding/on_boarding';
import InterviewSchedule from '../components/onBoarding/interview_schedule';
import DocumentVetting from '../components/onBoarding/document_vetting';
import SignContract from '../components/onBoarding/sign_contract';
import Complete from '../components/onBoarding/complete';
import Clients from '../components/clients/index';
import carerSignContract from '../components/contracts/carer_sign_contract';
import PaymentInformation from '../components/profile/payment_information';
import PaymentInformationCallback from '../components/profile/payment_information_callback';
// import Recipients from '../components/recipients';
import CarerVisit from '../components/visit/carer_visit';
import VisitDetails from '../components/visit/visit_details';
import UpcomingVisitDetails from '../components/visit/upcoming_visit_detail';

export default class CarerPortalPreWrap extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/portal-carer' component={Dashboard} />
                <Route path='/portal-carer/onboarding/schedule-interview' component={InterviewSchedule} />
                <Route path='/portal-carer/onboarding/document-vetting' component={DocumentVetting} />
                <Route path='/portal-carer/onboarding/sign-contract' component={SignContract} />
                <Route path='/portal-carer/onboarding/complete' component={Complete} />
                <Route path='/portal-carer/onboarding' component={Onboarding} />

                <Route path='/portal-carer/profile' component={CarerProfile} />

                <Route path='/portal-carer/clients' component={Clients} />
                <Route path='/portal-carer/carer-sign-contract' component={carerSignContract} />
                {/* <Route exact path='/portal-carer/carers/:id' component={} /> 
                    <Route exact path='/portal-carer/carers/interviews' component=  {} /> */}
                <Route path='/portal-carer/payments' component={PaymentInformation} />
                <Route path='/portal-carer/profile/payment-information-callback' component={PaymentInformationCallback} />
                <Route path='/portal-carer/visit/upcoming-visits' component={CarerVisit} />
                <Route path='/portal-carer/visit/ongoing-visit-detail/:id' component={VisitDetails} />
                <Route path='/portal-carer/visit/upcoming-visit-detail/:id' component={UpcomingVisitDetails} />
            </Switch>
        )
    }
}
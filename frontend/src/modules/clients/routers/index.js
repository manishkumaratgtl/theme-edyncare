import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../components/dashboard';
import CarersList from '../components/carers/carers_list';
import CarerIndividual from '../components/carers/carer_individual';
import Interviews from '../components/carers/interviews';
import CarePlans from '../components/careplans/careplans';

import clientSignContract from '../components/contracts/client_sign_contract';
import PaymentInformation from '../components/profile/payment_information';
import ClientProfile from '../components/profile/client_profile';
import OnBoarding from '../components/onBoarding/on_boarding';


export default class ClientPortalWrap extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/portal-client' component={Dashboard} />
                <Route exact path='/portal-client/my-profile' component={ClientProfile} />
                <Route exact path='/portal-client/care-plans' component={CarePlans} />
                <Route exact path='/portal-client/carers' component={CarersList} />
                <Route exact path='/portal-client/carers/:id' component={CarerIndividual} />
                <Route exact path='/portal-client/carers/interviews' component={Interviews} />
                <Route exact path='/portal-client/client-sign-contract' component={clientSignContract} />
                <Route exact path='/portal-client/payments' component={PaymentInformation} />
                <Route exact path='/portal-client/on-boarding' component={OnBoarding} />
            </Switch>
        )
    }
}

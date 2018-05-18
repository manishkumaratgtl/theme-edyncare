import React, { Component } from 'react';
import Header from '../../../../containers/header';
import Footer from '../../../../containers/footer';
import GetStarted from '../getStarted/get_started'
import HowItWorks from '../getStarted/how_it_works'
import RequestConsultation from '../getStarted/request_consultation'
import HowMuchItCosts from '../getStarted/how_much_it_costs'
import BackingUs from '../getStarted/backing_us'

export default class GetStartedMain extends Component {
    render() {
        return (
            <div>
                <Header />
                <GetStarted />
                <HowItWorks />
                <RequestConsultation />
                <HowMuchItCosts />
                <BackingUs />
                <Footer />
            </div>
        )
    }
}

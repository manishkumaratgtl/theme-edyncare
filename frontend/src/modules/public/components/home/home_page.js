import React, { Component } from 'react';
import Header from '../../../../containers/header';
import Footer from '../../../../containers/footer';
import Hero from '../homePage/hero';
import WhoIs from '../homePage/whois';
import HomeCare from '../homePage/home_care';
import Testimonials from '../homePage/testimonials';
import WhyWe from '../homePage/why_we';
import HowWeCanHelp from '../homePage/how_we_can_help';
import HowItWorks from '../homePage/how_it_works';
import '../../../../scss/custom/basic.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid no-gutter">
                <Header />
                <Hero />
                <WhoIs />
                <HomeCare />
                <Testimonials />
                <WhyWe />
                <HowWeCanHelp />
                <HowItWorks />
                <Footer />
            </div>
        )
    }
}

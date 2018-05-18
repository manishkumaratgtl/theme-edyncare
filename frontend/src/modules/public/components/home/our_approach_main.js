import React, { Component } from 'react';
import Header from '../../../../containers/header';
import Footer from '../../../../containers/footer';
import OurApproach from '../ourApproach/our_approach';
import HomeCare from '../homePage/home_care';
import Care from '../ourApproach/care';
import HowWeCanHelp from '../homePage/how_we_can_help';
import NeedToTalk from '../ourApproach/need_to_talk';
import HowWeUseTechnology from '../ourApproach/how_we_user_technology';

export default class OurApproachMain extends Component {
    render() {
        return (
            <div className= "container-fluid no-gutter">
                <Header />
                <OurApproach />
                <HomeCare />
                <HowWeCanHelp />
                <Care />
                <NeedToTalk />
                <HowWeUseTechnology />
                <Footer />
            </div>
        )
    }
}

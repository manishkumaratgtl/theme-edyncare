import React, { Component } from 'react';
import Header from '../../../../containers/header';
import Footer from '../../../../containers/footer';
import ApplyToday from '../becomeACarer/apply_today'
import PuttingYouFirst from '../becomeACarer/putting_you_first'
import EdynCarersAre from '../becomeACarer/edyn_carers_are'
import HowItWorks from '../becomeACarer/how_it_works'
import HowToJoin from '../becomeACarer/how_to_join'

class BecomeACarer extends Component {
    render() {
        return (
            <div>
                <Header />
                <ApplyToday />
                <PuttingYouFirst />
                <EdynCarersAre />
                <HowItWorks />
                <HowToJoin />
                <Footer />
            </div>
        )
    }
}

export default BecomeACarer
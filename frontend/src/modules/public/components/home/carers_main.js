import React, { Component } from 'react';
import Header from '../../../../containers/header';
import Footer from '../../../../containers/footer';
import EnsureQuality from '../ourCarers/ensure_quality';
import OurCarers from '../ourCarers/our_carers';
import CarerCv from "../ourCarers/carers_cv";
import HaveYouGot from "../ourCarers/have_you_got";


class Carers extends Component {
    render() {
        return (
            <div>
                <Header />
                <OurCarers />
                <EnsureQuality />
                <CarerCv />
                <HaveYouGot />
                <Footer />
            </div>
        )
    }
}

export default Carers
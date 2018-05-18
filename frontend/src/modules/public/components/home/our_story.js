import React, { Component } from 'react';
import Header from '../../../../containers/header';
import Footer from '../../../../containers/footer';
import OurStoryComp from '../ourStory/our_story_comp';
import Why from '../ourStory/why';
import OurTeam from '../ourStory/our_team';
import OurAdvisors from '../ourStory/our_advisors';
import LetUsHelp from '../ourStory/let_us_help';
// import NeedToTalk from '../ourStory/need_to_talk';

export default class OurStory extends Component {
    
    render() {
        return (
            <div>
                <Header />
                <OurStoryComp />
                <Why />
                <OurAdvisors />
                <OurTeam />
                <LetUsHelp />
                <Footer />
            </div>
        )
    }
}

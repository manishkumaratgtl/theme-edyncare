import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../components/home/landing_page';
import CarersMain from '../components/home/carers_main';
import CareersMain from '../components/home/careers_main';
import HomePage from '../components/home/home_page';
import OurApproachMain from '../components/home/our_approach_main';
import GetStartedMain from '../components/home/get_started_main';
import OurStory from '../components/home/our_story';
import BecomeACarer from '../components/home/become_a_carer';
import CarerOnBoarding from '../components/home/carer_on_boarding';
import ClientOnBoarding from '../components/home/_ClientOnBoarding';
import CareConsultationSchedule from '../components/home/care_consultation_schedule';
import InterviewSchedule from '../components/home/interview_schedule';
import CarePlan from '../../admin/components/clients/clientIndividual/care_plan';
import SignContract from '../../carers/components/onBoarding/sign_contract';

import Auth from '../../../components/auth/auth';
import Callback from '../../../components/callbacks/callback';
import NotFound from '../../../containers/not_found';

import CreateAdmin from '../../admin/components/admin/create_admin';


export default class PublicPortalWrap extends Component {
  render() {
    const auth = new Auth();
    let location = window.location;
    const handleAuthentication = ({ location }) => {
      if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
      }
    };
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/our-carers' component={CarersMain} />
        <Route path='/careers' component={CareersMain} />
        <Route path='/home' component={HomePage} />
        <Route path='/our-approach' component={OurApproachMain} />
        <Route path='/get-started' component={GetStartedMain} />
        <Route path='/our-story' component={OurStory} />
        <Route path='/become-a-carer' component={BecomeACarer} />
        <Route path='/carer-on-boarding' component={CarerOnBoarding} />
        <Route path='/client-on-boarding' component={ClientOnBoarding} />
        <Route path='/care-consultation-schedule/:id' component={CareConsultationSchedule} />
        <Route path='/schedule-interview/:id' component={InterviewSchedule} />
        <Route path='/sign-contract' component={SignContract} />
        <Route path='/careplan' component={CarePlan} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />;
        }}/>
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

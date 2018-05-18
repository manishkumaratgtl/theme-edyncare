import React, { Component } from 'react';
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";

import StatusBar from './onBoarding/status_bar';
import CarerOnBoardingP1 from './onBoarding/carer_on_boarding_p1';
import F2FInterviewP2 from './onBoarding/f2f_interview_p2';
import SendContract from './onBoarding/send_contract';
import Collapsible from '../../../../../components/reduxFormFields/collapsible_role';


class CarePlan extends Component {

    
    render(){
        return (

            <div className= "container no-gutter ">
                <Collapsible id="1" title="Client Info" content="ClientInfo" buttonAction="http://www.facebook.com" button="Save">
                  
                
                </Collapsible>

                <Collapsible id="2" title="Emergency Info" buttonAction="http://www.facebook.com" button="Save">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Collapsible>

                <Collapsible id="3" title="Daily Routines" buttonAction="http://www.facebook.com" button="Save">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                </Collapsible>

            </div>
        )
    }
}



export default CarePlan
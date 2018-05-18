import React, { Component } from 'react';
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";

import StatusBar from './onBoarding/status_bar';
import CarerOnBoardingP1 from './onBoarding/carer_on_boarding_p1';
import F2FInterviewP2 from './onBoarding/f2f_interview_p2';
import SendContract from './onBoarding/send_contract';

class OnBoarding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carersIndiv: {name : { Surname : "" , FirstName : ""}
            , CareExperiance: []
            , CareServices: []
            , AreasOfInterest: []
            , AquisitionChannel: []}
        };
    }

    componentDidMount(){

        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer/' + this.props.selectCarerId, {
            method: "GET",
            body: null,
        }).then((response)=> {
            if (response.status!== 200){
//                console.log("Handle error"+ response.status)
                return
            }
            response.json().then((data)=> {
                this.setState({
                    carersIndiv: data
                })
            })
        })
    }

    render(){
        return (
            <div className= "container">
                <StatusBar selectedCarer= {this.state.carersIndiv}/>
                <CarerOnBoardingP1 selectedCarer= {this.state.carersIndiv}/>
                <F2FInterviewP2 selectedCarer= {this.state.carersIndiv}/>
                <SendContract selectedCarer= {this.state.carersIndiv}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return (
        {
            selectedCarer: state.selectedCarer
        }
    )
}

export default connect(mapStateToProps, null)(OnBoarding);

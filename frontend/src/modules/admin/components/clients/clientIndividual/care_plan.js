import React, { Component } from 'react';
import "../../../../../scss/custom/carePlan.scss"
import CarePlanNew from './carePlan/care_plan_new';
import CarePlanView from './carePlan/care_plan_view';
import CarePlanList from './carePlan/care_plan_list';

export default class CarePlan extends Component {
    render(){
        return(
            <div className= "container-float">
                <CarePlanList selectClientId= {this.props.selectClientId}/>
                <CarePlanNew selectClientId= {this.props.selectClientId}/>
                <CarePlanView selectClientId= {this.props.selectClientId}/>
            </div>
        )
    }
}

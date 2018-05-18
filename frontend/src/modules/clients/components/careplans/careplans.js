import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import ReactTable from 'react-table'
import "react-table/react-table.css";
import matchSorter from 'match-sorter'

import CarePlanList from './careplan_list'
import CarePlan from './careplan'

class CarePlans extends Component {

    render(){

        return(
            <div className= "container-float">
                <div className= "row">
                    <h3>Current care plan</h3>
                    <CarePlan />
                </div>
                <div className= "row">
                    <h3>List of all care plans</h3>
                    <CarePlanList />
                </div>
            </div>
        )
    }
}

export default CarePlans
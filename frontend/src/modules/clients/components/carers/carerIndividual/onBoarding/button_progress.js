import React, { Component } from 'react';
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { decideCarerRound } from '../../../../actions/ClientActions'



//{()=> this.props.decideCarerRound(selectedCarer.Id, "P1", "APPROVE")}
class ButtonProgress extends Component {


    render() {

        return (
            <div>
                <button
                    className="btn btn-secondary m-2" style={{ width: "130px" }}
                    onClick={""}>
                    Approve
            </button>
                <button
                    className="btn btn-secondary m-2" style={{ width: "130px" }}
                    onClick={""}>
                    Reject
            </button>
            </div>
        )
    }
}



export default ButtonProgress
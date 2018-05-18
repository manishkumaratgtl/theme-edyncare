import React, { Component } from 'react';


class StatusBar extends Component {

    render(){
        return (
            <div className= "container p-4 m-4" style= {{width: "auto", border: "2px solid grey"}}>
                <h2>Carer On-boarding status</h2>
                <br/>Application date: {this.props.selectedCarer.UpdatedDate}
                <br/>Last update: 
                <br/>Application status: {this.props.selectedCarer.Status}
            </div>
        )
    }
}

export default StatusBar
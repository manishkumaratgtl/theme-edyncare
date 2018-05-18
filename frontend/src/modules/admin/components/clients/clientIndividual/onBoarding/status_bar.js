import React, { Component } from 'react';


class StatusBar extends Component {

    render(){
        return (
            <div className= "container p-4 m-4" style= {{width: "auto", border: "2px solid grey"}}>
                <h2>Status</h2>
                Application date: {this.props.selectedClient.RegistrationDate}
                <br/>Last update: {this.props.selectedClient.UpdatedDate}
                <br/>Application status: {this.props.selectedClient.Status}
            </div>
        )
    }
}

export default StatusBar
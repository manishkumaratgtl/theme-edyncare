import React, { Component } from 'react';


class StatusBar extends Component {

    render(){
        return (
            <div className= "container">
                <br/>Application date: {this.props.selectedCarer.UpdatedDate}
                <br/>Last update: 
                <br/>Application status: {this.props.selectedCarer.Status}
            </div>
        )
    }
}

export default StatusBar
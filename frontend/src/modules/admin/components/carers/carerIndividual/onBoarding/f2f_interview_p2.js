import React, { Component } from 'react';

import RoundDecision from './round_decision'

class F2FInterview extends Component {
    constructor(props) {
        super(props);
        this.updateStatus = this.updateStatus.bind(this);
    }

    updateStatus(event){
        const updated= {
            TableName: "carer-dev",
            Key: { 
                Id: this.props.selectedCarer.Id
            },
            UpdateExpression: "set #Field = :Input",
            ExpressionAttributeNames: {
                "#Field": "Status"
            },
            ExpressionAttributeValues: {
                ":Input": event
            },
            Id: this.props.selectedCarer.Id,
            Status: event,
            Email: this.props.selectedCarer.Email,
        }

        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer/update', {
                method: "POST",
                body: JSON.stringify(updated),
            }
        )
    }
    
    render(){

        const selectedCarer= this.props.selectedCarer[0]
        return(
            <div>
                <RoundDecision updateStatus= {this.updateStatus} round= {"F2F interview"} passUpdate= {"P2- Pass"} failUpdate= {"P2- Rejected"}/>
            </div>
        )
    }
}

export default F2FInterview
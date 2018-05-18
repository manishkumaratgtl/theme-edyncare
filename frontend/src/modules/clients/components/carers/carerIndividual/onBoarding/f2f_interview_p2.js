import React, { Component } from 'react';

class F2FInterview extends Component {

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
        window.location.reload();
    }
    
    render(){

        const selectedCarer= this.props.selectedCarer[0]
        return(
            <div>
                <hr/>
                <h3>F2F interview</h3>
                <h3>Decision ROUND</h3>
                Suggested decision [APPROVE/ REJECT]
                <br/>
                Decision: [APPROVE] [REJECT]
                Reason: <input type="text" name="decisionComment"></input>
                By: [ADMIN'S USERNAME]
                <button 
                    className="btn btn-secondary"
                    onClick= {()=> this.updateStatus("P2- Pass")}>
                    Approve
                </button>
                <button 
                    className="btn btn-secondary"
                    onClick= {()=> this.updateStatus("P2- Rejected")}>
                    Reject
                </button>
            </div>
        )
    }
}

export default F2FInterview
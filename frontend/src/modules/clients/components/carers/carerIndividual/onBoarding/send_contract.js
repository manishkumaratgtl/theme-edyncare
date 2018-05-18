import React, { Component } from 'react'

class SendContract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contract: {
                test_mode : 1,
                clientId : "",
                template_id: "",
                subject : "",
                signers : [
                    {
                        email_address: props.selectedCarer.Email,
                        name: "",
                        role: ""
                    }
                ],
            }
        }
        this.createContract = this.createContract.bind(this);
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
        window.location.reload();
    }

    componentWillReceiveProps(props){
        this.setState({
            contract: {
                test_mode : 1,
                clientId: "e5de7a08ba6825eb9a9003bdefa03a61",
                template_id: '3ee2706d75e729da2de4719520ae50c2b0479c0c',
                subject : 'Edyn Care employment contract',
                signers : [
                    {
                        email_address: props.selectedCarer.Email,
                        name: props.selectedCarer.name.FirstName+ " "+ props.selectedCarer.name.Surname,
                        role: "Carers"
                    }
                ],
                signerType: "Carer",
                signerCarerID: props.selectedCarer.Id
            },
        })
    }

    createContract(){
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'contracts/create', {
            method: "POST",
            body: JSON.stringify(this.state.contract)
       })
    }

    render(){
        
        // const selectedCarer= this.props.selectedCarer
        return (
            <div>
                <hr/>
                <h3>Send contract</h3>
                <h3>Decision ROUND</h3>
                Suggested decision [APPROVE/ REJECT]
                <br/>
                Decision: [APPROVE] [REJECT]
                Reason: <input type="text" name="decisionComment"></input>
                By: [ADMIN'S USERNAME]
                <button 
                    className="btn btn-secondary"
                    onClick= {()=> this.updateStatus("P4- Pass")}>
                    Approve
                </button>
                <button 
                    className="btn btn-secondary"
                    onClick= {()=> this.updateStatus("P4- Rejected")}>
                    Reject
                </button>
            </div>
        )
    }
}

export default SendContract
import React, { Component } from 'react'

import RoundDecision from './round_decision'

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
                        name: props.selectedCarer.name.firstName+ " "+ props.selectedCarer.name.surname,
                        role: "Carers"
                    }
                ],
                signerType: "Carer",
                signerCarerID: props.selectedCarer.Id
            },
        })
    }


    render() {        
        const selectedCarer= this.props.selectedCarer
        return (
            <div>
                <RoundDecision updateStatus= {this.updateStatus} round= {"Send contract"} passUpdate= {"P4- Pass"} failUpdate= {"P4- Rejected"}/>
            </div>
        )
    }
}

export default SendContract
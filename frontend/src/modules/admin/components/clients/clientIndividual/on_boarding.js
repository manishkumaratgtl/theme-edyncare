import React, { Component } from 'react';
import StatusBar from './onBoarding/status_bar';
import CollapsibleItem from '../collapsible_item';
import RoundDecision from './onBoarding/round_decision';

class OnBoarding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientIndiv: {
                name: { surname: "", firstName: "" }
                , recipient: [{ name: { surname: "", firstName: "" } }]
                , Status: "Onboarding"
                , careNeeds: null
                , careServices: null
                , interests: null
            },
            isLoading: true
        }
        this.updateStatus = this.updateStatus.bind(this);

    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'client/' + this.props.selectClientId, {
            method: "GET",
            body: null,
        }).then((response) => {
            if (response.status !== 200) {
                console.log("Handle error" + response.status)
                return
            }
            response.json().then((data) => {
                this.setState({
                    clientIndiv: data,
                    isLoading: false,
                });
            })
        })
    }


    updateStatus(event) {
        const updated = {
            Id: this.state.clientIndiv.Id,
            Status: event,
            Email: this.state.clientIndiv.Email,
            name: this.state.clientIndiv.name,
        }
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'client/update', {
            method: "POST",
            body: JSON.stringify(updated),
        }).then((response) => {
            response.json().then((data) => {
                this.state.clientIndiv.Status = data.Status;
                this.state.clientIndiv.UpdatedDate = data.UpdatedDate;
                this.setState({ clientIndiv: this.state.clientIndiv });
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    renderReceipient() {
        return this.state.clientIndiv.recipient.map((obj) => {
            return (
                <div key={obj.Id} className="container">
                    <div className="row">
                        <div className="col">Recipient's Relation</div>
                        <div className="col">{this.state.clientIndiv.relClientRecipient}</div>
                    </div>
                    <div className="row">
                        <div className="col">Name</div>
                        <div className="col">{obj.name.firstName} {obj.name.surname}</div>
                    </div>
                    <div className="row">
                        <div className="col">Gender</div>
                        <div className="col">{obj.gender}</div>
                    </div>
                    <div className="row">
                        <div className="col">DOB</div>
                        <div className="col">{obj.dateOfBirth}</div>
                    </div>
                    <div className="row">
                        <div className="col">Address</div>
                        <div className="col">{obj.postCode}</div>
                    </div>
                    <div className="row">
                        <div className="col">Nationality</div>
                        <div className="col">{obj.nationality}</div>
                    </div>
                </div>
            );
        });
    }

    render() {

        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        let careTimes = this.state.clientIndiv.recipient[0].careTimes;

        return (
            <div className="container">
                <StatusBar selectedClient={this.state.clientIndiv} />

                <div className= "container p-4 m-4" style= {{width: "auto", border: "2px solid grey"}}>
                <h2>On-boarding form</h2>
                <CollapsibleItem id="1" title="Contact details" button="Save">
                    <div className="container">
                        <div className="row">
                            <div className="col">Name</div>
                            <div className="col">{this.state.clientIndiv.name.firstName} {this.state.clientIndiv.name.surname}</div>
                        </div>
                        <div className="row">
                            <div className="col">Gender</div>
                            <div className="col">{this.state.clientIndiv.gender}</div>
                        </div>
                        <div className="row">
                            <div className="col">DOB</div>
                            <div className="col">{this.state.clientIndiv.dateOfBirth}</div>
                        </div>
                        <div className="row">
                            <div className="col">Address</div>
                            <div className="col">{this.state.clientIndiv.postCode}</div>
                        </div>
                        <div className="row">
                            <div className="col">Nationality</div>
                            <div className="col">{this.state.clientIndiv.nationality}</div>
                        </div>
                    </div>
                </CollapsibleItem>

                {this.state.clientIndiv.recipient[0].careForClient === '0' &&
                    <CollapsibleItem id="2" title="Recipient" button="Save">
                        {this.renderReceipient()}
                    </CollapsibleItem>
                }

                <CollapsibleItem id="3" title="Care Needs and Services" button="Save">
                    <div className="container">
                        {this.state.clientIndiv.recipient[0].careNeeds != null &&
                            <div className="row">
                                <div className="col">Care Needs</div>
                                <div className="col">{this.state.clientIndiv.recipient[0].careNeeds.map((value, i) => {
                                    return <div key={i}>{value}</div>
                                })}</div>
                            </div>
                        }

                        {this.state.clientIndiv.recipient[0].careServices != null &&
                            <div className="row">
                                <div className="col">Care Services</div>
                                <div className="col">{this.state.clientIndiv.recipient[0].careServices.map((value, i) => {
                                    return <div key={i}>{value}</div>
                                })}</div>
                            </div>
                        }
                    </div>
                </CollapsibleItem>

                <CollapsibleItem id="4" title="Interests" button="Save">
                    <div className="container">
                        {this.state.clientIndiv.recipient[0].interests != null &&
                            <div className="row">
                                <div className="col">Interests</div>
                                <div className="col">{this.state.clientIndiv.recipient[0].interests.map((value, i) => {
                                    return <div key={i}>{value}</div>
                                })}</div>
                            </div>
                        }
                    </div>
                </CollapsibleItem>


                <CollapsibleItem id="5" title="Care Times" button="Save">
                    <div className="container">
                        {careTimes != null &&
                            <div className="row">
                                <div className="col">Care Times</div>
                                {Array.isArray(careTimes) ? <div className="col">{this.state.clientIndiv.recipient[0].careTimes.map((value, i) => {
                                    return <div key={i}>{value}</div>
                                })}</div> : <div className="col">{careTimes}</div>}                                
                            </div>
                        }
                    </div>
                </CollapsibleItem>
                </div>
                <RoundDecision client={this.state.clientIndiv} updateStatus={this.updateStatus} round={"P1"} passUpdate={"Approved"} failUpdate={"Rejected"} />
            </div>
        )
    }
}


export default OnBoarding
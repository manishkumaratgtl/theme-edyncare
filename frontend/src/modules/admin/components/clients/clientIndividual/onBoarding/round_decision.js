import React, { Component } from 'react';

class RoundDecision extends Component {
    componentDidMount(){
        console.log("RoundDecision/componentDidMount")
    }

    render(){
        return (
            <div className= "container p-4 m-4" style= {{width: "auto", border: "2px solid grey"}}>
                <h2>Decision {this.props.round}</h2>
                    <div className= "row align-items-center py-2">
                        <div className="col-3">
                            Suggested decision
                        </div>
                        <div className="col">
                            TBC - This field will be autopopulated based on business rules
                        </div>
                    </div>
                    <div className= "row align-items-center py-2">
                    <div className="col-3">
                            Reason: 
                        </div>
                        <div className="col">
                            <input type="text" name="decisionComment"></input>
                        </div>
                    </div>
                    <div className= "row align-items-center py-2">
                        <div className="col-3">
                            Decision : {this.props.client.Status}
                        </div>
                        <div className="col">
                            <button disabled={this.props.client.Status === this.props.passUpdate} className="btn btn-secondary" onClick= {()=> this.props.updateStatus(this.props.passUpdate)}>Approve </button>
                        </div>
                        <div className="col">
                            <button disabled={this.props.client.Status === this.props.failUpdate} className="btn btn-secondary" onClick= {()=> this.props.updateStatus(this.props.failUpdate)}> Reject </button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default RoundDecision
import React, { Component } from 'react';

class RoundDecision extends Component {

    componentDidMount(){
        console.log("RoundDecision/componentDidMount")
    }

    render(){
        return (
            <div className= "container p-4 m-4" style= {{width: "auto", border: "2px solid grey"}}>
                <h2>{this.props.round}</h2>
                <div className= "row align-items-center py-2">
                <div className="col-3">
                    <h3>Comment: </h3>
                </div>
                <div className="col-7">
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                </div>
                <div className= "row align-items-center py-2">
                    <div className="col-3">
                        <h3>Decision: </h3>
                    </div>
                    <div className="col">
                        <button className="align-middle btn btn-next white py-3" onClick= {()=> this.props.updateStatus(this.props.passUpdate)}>Approve </button>
                    </div>
                    <div className="col">
                        <button className="align-middle btn btn-next white py-3" onClick= {()=> this.props.updateStatus(this.props.failUpdate)}> Reject </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoundDecision
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class RoundDecision2 extends Component {
    componentDidMount(){
        console.log("RoundDecision/componentDidMount")
    }

    render(){
        const { handleSubmit, pristine, submitting } = this.props

        return (
            <form className= "container p-4 m-4" onSubmit={()=> this.props.updateStatus()} style= {{width: "auto", border: "2px solid grey"}}>
                <h2>{this.props.round}</h2>
                    <div className= "row align-items-center py-2">
                        <div className="col-3">
                            <h3>Suggested decision</h3>
                        </div>
                        <div className="col">
                        <h3>TBC - This field will be autopopulated based on business rules</h3>
                        </div>
                    </div>
                    <div className= "row align-items-center py-2">
                    <div>
                        <label>Notes</label>
                            <div>
                            <Field name="notes" component="textarea"/>
                            </div>
                        </div>
                    </div>
                    <div className= "row align-items-center py-2">
                        <div className="col-3">
                            <h3>Decision</h3>
                        </div>
                        <div className="col">
                            <label><Field name="decision" component="input" type="radio" value={this.props.passUpdate}/> Pass</label>
                            <label><Field name="decision" component="input" type="radio" value={this.props.failUpdate}/> Fail</label>
                        </div>
                    </div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
            </form>
        )
    }
}
export default reduxForm({
    form: 'round2',
  })(RoundDecision2)

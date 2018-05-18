import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submitCTAPhone } from '../../../actions/CTAPhone';

class CTAPhoneForm extends Component {
    //Form to recieve, validate and pass user input to CTAPhone

    constructor(props){
		super(props)
        this.state= {
            formComplete: {
                CTAPhoneYourName: "",
                CTAPhoneCareFor: "",
                CTAPhoneYourEmail: "",
                CTAPhoneYourPhone: ""
            }
        }
        this.onSubmit= this.onSubmit.bind(this)
    };

    onChange(event){
        let nextformComplete= Object.assign({}, this.state.formComplete);
        nextformComplete[event.target.name]= event.target.value;
        this.setState({
            formComplete: nextformComplete
        })
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state)
    }

    render(){
        
        return (
            <div>
                <h3>We'll get back to you</h3>
                <div className="row">
                    <div className="col-sm-6 p-2">
                        Your name
                            <input name= "CTAPhoneYourName" placeholder= "Full name" onChange= {event=> this.onChange(event)}></input><br />
                    </div>
                    <div className="col-sm-6 p-2">
                        Who is the care for?
                        <input name= "CTAPhoneCareFor" placeholder= "Myself/ Parent/ Other" onChange= {event=> this.onChange(event)}></input><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 p-2">
                        Your email
                            <input name= "CTAPhoneYourEmail" placeholder= "Email address" onChange= {event=> this.onChange(event)}></input><br />
                    </div>
                    <div className="col-sm-6 p-2">
                        Phone number
                        <input name= "CTAPhoneYourPhone" placeholder= "Phone number" onChange= {event=> this.onChange(event)}></input><br />
                    </div>
                </div>

                <button onClick={ this.onSubmit } >Request</button>
            
            </div>
        )
    }
}

const mapStateToProps= (state)=> {
    return {
        isCTASuccess: state.isCTASuccess
    }
}

const mapDispatchToProps= (dispatch)=> {
    return {
        submitCTAPhone: ()=> dispatch(submitCTAPhone())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(CTAPhoneForm)
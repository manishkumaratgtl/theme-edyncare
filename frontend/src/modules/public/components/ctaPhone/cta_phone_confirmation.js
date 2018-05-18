import React, { Component } from 'react';

class CTAPhoneConfirmation extends Component {

    render(){
//        let { reqTimeSlot, reqDate, namePref, contNumber }= this.props.formComplete;
        
        return (
            <div>
                Thank you { this.props.formComplete.namePref } <br/>
                You have requestion a call back 
            </div>
        )
    }
}

export default CTAPhoneConfirmation
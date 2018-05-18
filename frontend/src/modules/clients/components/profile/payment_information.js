import React, { Component } from 'react';
import Auth from '../../../../components/auth/auth';
import StripeCheckout from 'react-stripe-checkout';
const auth = new Auth();


class PaymentInformation extends Component {
  render() {
    return (
        <StripeCheckout
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLSHIBALE_KEY}
      />
    );
  }
  onToken = (token) => {
    var stripePaymentInformation = {};
    stripePaymentInformation.type = "client";
    stripePaymentInformation.ClientId = auth.getUserId();
    stripePaymentInformation.token = token;
    fetch(process.env.REACT_APP_BACKEND_BASE_URL +'/payment/connect-user', {
      method: 'POST',
      body: JSON.stringify(stripePaymentInformation),
    }).then(response => {
      response.json().then(data => {
        //alert(`We are done`);
      });
    });
  }
}

export default PaymentInformation;
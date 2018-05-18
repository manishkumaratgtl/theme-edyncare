import React, { Component } from 'react';
import { parse } from 'querystringify';
import Auth from '../../../../components/auth/auth';
const auth = new Auth();

class PaymentInformationCallback extends Component {

  constructor(props) {
    super(props);
    const parsed = parse(props.location.search);
    const token = parsed.code;
    var stripeConnectInformation = {};
    stripeConnectInformation.type = 'carer';
    stripeConnectInformation.CarerId = auth.getUserId();
    stripeConnectInformation.token = token;

    if (token) {
      fetch(process.env.REACT_APP_BACKEND_BASE_URL + '/payment/connect-user', {
        method: 'POST',
        body: JSON.stringify(stripeConnectInformation),
      }).then((response) => {
        response.json().then((data) => {
          // alert(`We are in done`);
        });
      });

    }

  }
  render() {
    return <div> Carer information stored in DB. </div>;
  }
}
export default PaymentInformationCallback;

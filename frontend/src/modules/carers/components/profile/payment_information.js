import React, {
  Component,
} from 'react';
import url from 'url';


class PaymentInformation extends Component {
  render() {
    var callbackUrl = url.resolve(window.location.href, '/portal-carer/profile/payment-information-callback');
    var stripeConnectId = process.env.REACT_APP_STRIPE_CONNECT_CLIENT_ID;
    var stripeLink = 'https://connect.stripe.com/oauth/authorize?response_type=code&amp;client_id=' + stripeConnectId + '&amp;scope=read_write&amp;redirect_uri=' + callbackUrl;
    return (<div>
      <a href={stripeLink} className = "btn btn-secondary btn-lg"> <span> Connect with Stripe </span></a>
    </div>
    );
  }
}

export default PaymentInformation;

import React, { Component } from 'react';
import HelloSignEmbed from '../../../../components/eSignature/hello_sign_embed'
import Auth from '../../../../components/auth/auth';

class SignCarerContract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carer: { id: "b51f1c60-380f-11e8-9a16-654f8df8c8f7" },
            contractID: "99ab4bc0-4d2c-11e8-90ca-d1c3a3532ce6",//Todo replace w/ actual carer id
            URL: "",
            isLoading: true
        };
    }

    componentWillMount() {
        const auth = new Auth();
        const carerId = auth.getUserId()
        const req = {
            "Email": "test@gatewaytechnolabs.com",// Email id of the carer used while creation of carer-client-create-contract
            "contractID": this.state.contractID//contractID  from carer-client-create-contract response
        };
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'contract/carer-client/sign' /*id to fetch from database*/, {
            method: "POST",
            body: JSON.stringify(req),
        }).then((response) => {
            if (response.status !== 200) {
                console.log("Handle error" + response.status)
                return
            }
            response.json().then((data) => {
                if (!data.sign_url) {
                    console.log("Date retrival error")
                    return
                }
                this.setState({
                    URL: data.sign_url,
                    isLoading: false
                })
            })
        })
    }


    render() {
        const URL = this.state.URL

        return (
            <div>
                <div className="container">
                    <div className="row text-center  mb-5">
                        <div className="col">
                            <div className="error-template">
                                <h2>Sign contract</h2>
                                {this.state.isLoading &&
                                    <div>There is no contract avilable to sign. Please get in touch if you are expecting one</div>
                                }
                                {!this.state.isLoading &&
                                    <HelloSignEmbed
                                        clientId="e5de7a08ba6825eb9a9003bdefa03a61"
                                        contractID={this.state.contractID}
                                        URL={URL}
                                        carerSigned={true}
                                        carerContract={false}
                                        inContainer={true} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignCarerContract

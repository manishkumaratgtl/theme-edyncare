import React, { Component } from 'react';

import WizardCarerOnBoarding from './wizard_carer_on_boarding';

import HelloSignEmbed from '../../../../components/eSignature/hello_sign_embed';
import Auth from "../../../../components/auth/auth"

const auth = new Auth();
const CarerId = auth.getUserId()

class SignContract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signatureCarerID: CarerId, 
            URL: "",
            isLoading: true
        };
    }

    componentWillMount() {
        const CarerId = auth.getUserId()

        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'contract/carer/sign/' + CarerId , {
            method: "GET",
            body: null,
        }).then((response) => {
            if (response.status !== 200) {
                console.log("Handle error" + response.status)
                return
            }
            response.json().then((data) => {
                console.log('data', data)
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

export default SignContract

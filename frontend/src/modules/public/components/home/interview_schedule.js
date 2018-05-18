import React, { Component } from 'react';
import HeaderOB from '../../../../containers/header_ob';
import WizardCarerOnBoarding from './wizard_carer_on_boarding';
// import axios from 'axios';

class InterviewSchedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carer: { Email: "", name: { surname: "", firstName: "" } }
        };

        const getCarer = async () => {
            const carerId = this.props.match.params.id;
            try {
                // const response = await axios.get(process.env.REACT_APP_BACKEND_BASE_URL + 'carer/' + carerId);
                // this.setState({ carer: response.data });
                // const script = document.createElement("script");
                // script.src = "https://assets.calendly.com/assets/external/widget.js";
                // script.async = true;
                // document.body.appendChild(script);
            } catch (error) {
                console.error(error);
            }
        }
        getCarer();
    }


    render() {
        var style = {
            minWidth: '320px',
            height: '580px'
        };
        return (
            <div>
                <HeaderOB />
                <WizardCarerOnBoarding page={1}/>
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col-md-12 p-4">
                            <div className="error-template">
                                <h2>In-person interview</h2>
                                <div className="calendly-inline-widget p-4" data-url={process.env.REACT_APP_CALENDLY_F2FINTERVIEW_EMBEDDED_URL + "?name=" + this.state.carer.name.firstName + " " + this.state.carer.name.surname + "&email=" + this.state.carer.Email} style={style}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InterviewSchedule;
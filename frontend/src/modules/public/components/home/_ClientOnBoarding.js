import React, { Component } from 'react';
import HeaderOB from '../../../../containers/header_ob';
import Footer from '../../../../containers/footer';
import WizardHeader from '../clientOnBoarding/wizard_header';
import IsCareForYou from '../clientOnBoarding/is_care_for_you';
import PersonalDetails from '../clientOnBoarding/personal_details';
import CareNeeds from '../clientOnBoarding/care_needs';
import Interests from '../clientOnBoarding/interests';
import CareTimes from '../clientOnBoarding/care_times';
import Summary from '../clientOnBoarding/summary';
import { reduxForm } from 'redux-form'
import '../../../../scss/custom/clientOnBoarding.css';

class ClientOnBoarding extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
        };
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        if (this.state.page=== 2) {
            window.location.reload()
        } else {
            this.setState({ page: this.state.page - 1 });
        }
    }

    render() {
        const { onSubmit } = this.props
        const { page } = this.state
        
        return (
            <div>
                <div className="color5 bg-full" />
                <HeaderOB />
                <WizardHeader page={this.state.page} />

                <div className="tab-content m-1">
                    {page === 1 && <div className="tab-pane active mb-5" id="step1">
                        <IsCareForYou onSubmit={this.nextPage}  />
                    </div>}

                    {page === 2 && <div className="tab-pane active mb-5" id="step2">
                        <PersonalDetails previousPage={this.previousPage} onSubmit={this.nextPage} />
                    </div>}

                    {page === 3 && <div className="tab-pane active mb-5" id="step3">
                        <CareNeeds previousPage={this.previousPage} onSubmit={this.nextPage} />
                    </div>}

                    {page === 4 && <div className="tab-pane active mb-5" id="step4">
                        <Interests previousPage={this.previousPage} onSubmit={this.nextPage} />
                    </div>}

                    {page === 5 && <div className="tab-pane active mb-5" id="step5">
                        <CareTimes previousPage={this.previousPage} onSubmit={onSubmit} nextPage={this.nextPage} />
                    </div>}

                    {page === 6 && <div className="tab-pane active mb-5" id="step6">
                        <Summary />
                    </div>}
                </div>
                
                {/*<Footer />*/}
            </div>
        )
    }
}

ClientOnBoarding = reduxForm({
    form: 'client-onboarding',                 // <------ same form name
    destroyOnMount: true,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    //validate: validate,
    //asyncValidate: asyncValidate,
    //asyncBlurFields: ['Email','postCode','recipient.postCode'],
})(ClientOnBoarding) 

export default ClientOnBoarding

import React, { Component } from 'react';
// import { Values } from 'redux-form-website-template';s
import HeaderOB from '../../../../containers/header_ob';
import Footer from '../../../../containers/footer';
import WizardHeader from '../carerOnBoarding/wizard_header';
import ContactDetails from '../carerOnBoarding/contact_details';
import CarerExperience from '../carerOnBoarding/carer_experience';
import LetsGetYouKnowBetter from '../carerOnBoarding/lets_get_you_know_better';
import Languages from '../carerOnBoarding/languages';
import FinalFew from '../carerOnBoarding/final_few';
import Summary from '../carerOnBoarding/summary';
import { Values } from 'redux-form-website-template';
import Intro from '../carerOnBoarding/intro';
import { reduxForm } from 'redux-form'
import '../../../../scss/custom/carerOnBoarding.css';

class CarerOnBoarding extends Component {
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
        this.setState({ page: this.state.page - 1 });
    }
    render() {
        const { onSubmit } = this.props
        const { page } = this.state

        return (
            <div >
                <div className="color7 bg-full" />
                <HeaderOB/>
                {page !== 1 &&  <WizardHeader page={this.state.page} /> }
                
                <div className="tab-content m-1">
                    {page === 1 && <div className="tab-pane active mb-5" id="step1">
                        <Intro onSubmit={this.nextPage} />
                    </div>}

                    {page === 2 && <div className="tab-pane active mb-5" id="step1">
                        <ContactDetails previousPage={this.previousPage} onSubmit={this.nextPage} />
                    </div>}

                    {page === 3 && <div className="tab-pane active mb-5" id="step2">
                        <CarerExperience previousPage={this.previousPage} onSubmit={this.nextPage} />
                    </div>}

                    {page === 4 && <div className="tab-pane active mb-5" id="step3">
                        <Languages
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        /> </div>}

                    {page === 5 && <div className="tab-pane active mb-5" id="step4">
                        <FinalFew
                            previousPage={this.previousPage} onSubmit={this.onSubmit} nextPage={this.nextPage} 
                        /> </div>}

                    {page === 6 && <div className="tab-pane active mb-5" id="step6">
                        <Summary onSubmit={onSubmit} />
                    </div>}

                    <div className="clearfix"></div>
                </div>
            </div >
        )
    }
}

CarerOnBoarding = reduxForm({
    form: 'carer-onboarding',  
    destroyOnMount: true,        
    forceUnregisterOnUnmount: true,  
})(CarerOnBoarding) 

export default CarerOnBoarding
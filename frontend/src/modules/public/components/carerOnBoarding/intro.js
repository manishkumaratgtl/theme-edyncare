import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { reduxForm, reset, Field} from 'redux-form';
import RenderFields from '../../../../components/reduxFormFields/render_fields';
import validate from './carer_on_boarding_validation'

class Intro extends Component {

    componentDidMount(){
        this.props.dispatch(reset('client-onboarding'))
        document.getElementById('HEADER').scrollIntoView();
    }

    render() {

        const { handleSubmit, previousPage} = this.props;
        return(
            <form className="" onSubmit={handleSubmit}>
                <div className="row no-gutter justify-content-center" >
                <div className= "col-8 col-md-8 no-gutter text-center">
                    <h2 className= "bold h32 py-5">Welcome to the edyn.care carer application</h2>
                    <h2 className= "pb-5">This application form will take a few minutes to complete.
                        Please ensure you fill out all sections truthfully and accurately. 
                        You will need to present proof of your skills and qualifications.</h2>
                    {/*
                    <h2>edyn.carer's are:
                        <ul>
                            <li>Compassionate, empathetic and punctual</li>
                            <li>Over 21 years old</li>
                            <li>Have at least 1 year of experience</li>
                            <li>Have up to date qualifications, including an NVQ; a certificate from an accredited provider</li>
                            <li>Physically capable of assisting clients with mobility</li>
                            <li>Able to pass comprehensive background checks - including DBS and identity checks</li>
                            <li>In ownership of a smartphone</li>
                            <li>Willing to travel to clients</li>
                        </ul>
                    </h2
                    >*/}
                </div>
                </div>
                <div className="row no-gutter justify-content-center"  >
                    <div className="col-8 col-md-8 no-gutter justify-content-center onboarding_form color0" >

                        <div className="col-12 text-center no-gutter m-auto pb-5">
                            <h2 className="pb-4">Enter your email address to begin
                            </h2>
                            <div className="col no-gutter w-100 text-left">
                                <Field name="Email" type="text" className="form-control select_onboarding" component={RenderFields} label="Email" />
                            </div>
                        </div>

                        <div className="row no-gutter justify-content-between">
                            <div className="col no-gutter text-left">
                                <NavLink className="align-middle btn btn-next7 white py-3 " to="/">Back to home</NavLink>
                            </div>
                            <div className="col no-gutter text-right">
                                <button onClick={handleSubmit} type="submit" className="align-middle btn btn-next7 white py-3">Continue</button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        )
    }
}

Intro = reduxForm({
    form: 'carer-onboarding',    
    destroyOnUnmount: false,       
    forceUnregisterOnUnmount: true, 
    validate: validate
})(Intro)  

export default Intro

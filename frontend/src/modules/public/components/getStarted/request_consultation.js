import React from "react";
import { reset, Field, reduxForm } from 'redux-form';
import validate from './request_consultation_validation';
import RenderFields from '../../../../components/reduxFormFields/render_fields';
import { ToastContainer, toast } from 'react-toastify';

const RequestConsultation = (props) => {
    const { handleSubmit, pristine, submitting } = props;

    return (
        <div>
            <ToastContainer />
            <div className="row no-gutter " style={{ position: "relative" }}>
                <div className="col-12 col-sm-12 col-md-7 col-lg-7 no-gutter" style={{ marginTop: "90px", marginBottom: "70px", zIndex: 1 }} >
                    <h1 className="ml-5 mt-5">Request a consultation</h1>
                    <form onSubmit={handleSubmit} >
                        <h2 className="h4 mt-5 ml-5">About you</h2>
                        <div className="row no-gutter">
                            <div className="col-sm-12 col-md-6 col-lg-6 no-gutter ">
                                <div className="form-group ml-5 mr-5">
                                    <Field name="Name" type="text" id="name" className="form-control" component={RenderFields} label="Full Name" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 no-gutter">
                                <div className="form-group ml-5 mr-5    ">
                                    <Field name="Email" type="text" id="email" className="form-control" component={RenderFields} label="Email" />
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 no-gutter">
                                <div className="form-group ml-5 mr-5">
                                    <Field name="CarerFor" type="text" className="form-control" component={RenderFields} label="Myself/Parent/Child" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 no-gutter">
                                <div className="form-group ml-5 mr-5">
                                    <Field name="Phone" type="text" className="form-control" id="phone" component={RenderFields} label="Phone" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" disabled={pristine || submitting} className="btn btn-call white ml-5 mr-2">Submit</button>
                    </form>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 no-gutter" style={{ marginTop: "90px", marginBottom: "70px", zIndex: 1 }} >
                    <h4 className="text-center pt-5 mt-5">Call us on:</h4>
                    <a href="tel:0800123456"><h1 className="text-center">0800 123456</h1></a>

                </div>
                <img src={require('../../../../images/designAssets/textures/public/getStarted/s3_bl.png')} className="background-bottom-left" alt="Edyn Care" />
                <img src={require('../../../../images/designAssets/textures/public/getStarted/s3_tr_blue.png')} className="background-top-right" alt="Edyn Care" />
                <img src={require('../../../../images/designAssets/textures/public/getStarted/s3_tr.png')} className="background-top-right" alt="Edyn Care" />
            </div>

        </div>
    );
}
const onSubmit = async (values, dispatch) => {
    await fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'client/requestConsultation', {
        method: "POST",
        body: JSON.stringify(values, null, 2),
    }).then(function (response) {
        if (response.status === 200) {
            response.json().then(json => {
                toast.success("We will contact you soon", {
                    position: toast.POSITION.TOP_RIGHT
                });
                dispatch(reset('requestConsultation'));
            });
        }

    }, function (error) {
        toast.error("Something went wrong, pls try again", {
            position: toast.POSITION.TOP_RIGHT
        });
    })
};
// const afterSubmit = (result, dispatch) =>
//   dispatch(reset('requestConsultation'));

export default reduxForm({
    form: 'requestConsultation',
    validate,
    onSubmit,
    //onSubmitSuccess: afterSubmit,
})(RequestConsultation)  
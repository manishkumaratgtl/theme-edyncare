import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { Values } from 'redux-form-website-template';
// import { connect } from 'react-redux'

import RenderFields from './../../../../../../components/reduxFormFields/render_fields';
import RenderSelect from './../../../../../../components/reduxFormFields/render_select';

class NewCarePlanInfo extends Component {
    render(){
        // const { handleSubmit, Value, previousPage, nextPage, pristine, reset, submitting} = this.props;
        return(
            <div className= "container" style= {{width: "auto"}}>

                <div className= "row no-gutter align-content-center" style={{width: "100%"}}>
                    <div className= "col-md-3 no-gutter text-right my-auto py-2 pr-3" >
                        <h3 className= "my-auto">Start date</h3>
                    </div>
                    <div className= "col-md-7 no-gutter">
                    <Field type="date" className="form-control" component={RenderFields} name="duration.startDate" label= "Start date" />
                    </div>
                </div>


                <div className= "row no-gutter align-content-center" style={{width: "100%"}}>
                    <div className= "col-md-3 no-gutter text-right my-auto py-2 pr-3" >
                        <h3 className= "my-auto">Duration</h3>
                    </div>
                    <div className= "col-md-7 no-gutter">
                        <Field name="duration.length" component= {RenderSelect} className="form-control" placeholder="Duration">
                            <option >Duration</option>
                            <option value="1 week">1 week</option>
                            <option value="1 month">1 month</option>
                            <option value="2 months">2 months</option>
                            <option value="3 months">3 months</option>
                        </Field>
                    </div>
                </div>

            </div>
        )
    }
}

NewCarePlanInfo = reduxForm({
    form: 'care-plan'  
})(NewCarePlanInfo)
  
export default NewCarePlanInfo
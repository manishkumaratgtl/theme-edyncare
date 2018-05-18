import React, { Component } from 'react';
import { Field } from 'redux-form';
import RenderFields from '../../../../../../../components/reduxFormFields/render_fields';

class Display extends Component { 
    render(){
        const { dispValue, Label, placeholder, fieldName, dispType } = this.props
        return(
            <div className= "row no-gutter align-content-center" style={{width: "100%"}}>
                <div className= "col-md-3 no-gutter text-right my-auto py-2 pr-3" >
                    <h3 className= "my-auto">{Label}</h3>
                </div>
                <div className= "col-md-7 no-gutter" style={{color: "red"}}>
                    <Field type="text" className="form-control" name={fieldName} component={RenderFields} />
                </div>
            </div>
        )
    }
}

export default Display
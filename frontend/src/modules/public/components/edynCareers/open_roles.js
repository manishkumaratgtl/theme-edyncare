import React, { Component } from 'react';
import CollapsibleRole from '../../../../components/reduxFormFields/collapsible_role';

export default class OpenRoles extends Component {  
    render(){
        return (<div className="container-fluid no-gutter pt-4" >   
        <div className="" >
            <h1 className="text-center">Open Roles</h1> 
            <div className= "row no-gutter justify-content-center  ">
                <div className= "col-10 col-lg-8 no gutter p-4 ">
                    <CollapsibleRole id="1" title="Head of Care" buttonAction="http://www.facebook.com" button="Apply here">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CollapsibleRole>

                    <CollapsibleRole id="2"title="Junior Developer" buttonAction="http://www.facebook.com" button="Apply here">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CollapsibleRole>

                    <CollapsibleRole id="3"title="Junior tea man" buttonAction="http://www.facebook.com" button="Apply here">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    </CollapsibleRole>
                </div>

            </div>
            </div>
            </div>
        )
    }
}

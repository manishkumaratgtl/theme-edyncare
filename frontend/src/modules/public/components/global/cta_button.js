import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

class CTAButton extends Component {
    render() {
        return( 
            <NavLink className="align-middle btn btn-edyn1 white py-3" to="/get-started">{this.props.children}</NavLink>
            
        )        
    }
}

export default CTAButton



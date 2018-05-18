import React, { Component } from 'react';

class Role extends Component {
    render() {
        return( 
            <div className="text-center">
                <h3>{this.props.children}</h3>
                </div>   
        )        
    }
}

export default Role
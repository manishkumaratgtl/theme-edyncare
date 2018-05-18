import React, { Component } from 'react';

class Button extends Component {
    render() {
        return( 
            <div style={{paddingTop: '20px',boxSizing: 'content-box'}}>
                <span className="btn btn-secondary">{this.props.children}</span>
            </div>
        )        
    }
}

export default Button



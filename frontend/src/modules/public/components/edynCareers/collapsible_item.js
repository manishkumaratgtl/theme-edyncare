import React, { Component } from 'react';
//import PropsTypes from 'prop-types';
//import Style from '../../../scss/custom/collapsible.css'
import Button from "../global/Button";

class CollapsibleItem extends Component {
    constructor(props){
        super(props)
        this.state ={
            isExpanded: false  
        }
    }

    handleToggle(e){
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        })
    }
    render() {
        const {roleTitle, children } = this.props;
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;
        return( 
           <div className='collapseItem'> 
                <div className={`panel ${isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleToggle(e)}>
                        <div className="panel-heading pt-2" >
                            <h3>
                                {roleTitle}
                            </h3>
                        </div>
                        <div className="panel-collapse" style={{height:currentHeight+'px'}}>
                            <div className="panel-body" ref="inner">
                                {children}
                                <Button>Apply Now</Button>
                            </div>

                        </div>
                </div>  
            </div> 
        )        
    }
}

export default CollapsibleItem
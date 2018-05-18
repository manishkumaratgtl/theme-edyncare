import React, { Component } from 'react';

class TeamMember extends Component {

    render(){
        return (
            <div >
                <img alt='Facebook' style= {{ maxWidth: 120}} src={require('../../../../images/profileAvatar/avatar.png')} className="img img-responsive imageSizeAvatar" />
                <h2>{this.props.name}</h2>
                <h4>{this.props.title}</h4>
                <h5>{this.props.quote}</h5>
            </div>
        )
    }
}

export default TeamMember
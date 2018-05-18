import React, { Component } from 'react';


class ClientInfo extends Component {

    
    render(){
        return (
            <div className= "container no-gutter my-3 ">
                    First name:<br/>
                    <input type="text" name="firstname" value="Mickey"/>
                    <br/>
                    Last name:<br/>
                    <input type="text" name="lastname" value="Mouse"/>
                    <br/><br/>
             
            </div>
        )
    }
}



export default ClientInfo


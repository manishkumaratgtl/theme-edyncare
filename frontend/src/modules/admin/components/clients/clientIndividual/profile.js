import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientsIndiv: {
                name: { surname: "", firstName: "" }
                , careNeeds: null
                , careServices: null
                , interests: null
            }
        };
    }

    componentWillMount() {

        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'client/' + this.props.selectClientId, {
            method: "GET",
            body: null,
        }).then((response) => {
            if (response.status !== 200) {
                console.log("Handle error" + response.status)
                return
            }
            response.json().then((data) => {
                this.setState({
                    clientsIndiv: data
                })
            })
        })
    }


    render() {

        const selectedClient = this.state.clientsIndiv

        return (
            <div className= "container p-4 m-4" style= {{width: "auto", border: "2px solid grey"}}>
                <h2 className= "pb-4">Client profile</h2>
                <div className="row">
                    <div className="col">
                        [Insert image]
                    </div>

                    <div className="col-5">
                        <div className="row">
                            <div className="col">Name</div>
                            <div className="col">{selectedClient.name.firstName} {selectedClient.name.surname}</div>
                        </div>
                        <div className="row">
                            <div className="col">Gender</div>
                            <div className="col">{selectedClient.gender}</div>
                        </div>
                        <div className="row">
                            <div className="col">DOB</div>
                            <div className="col">{selectedClient.dateOfBirth}</div>
                        </div>
                        <div className="row">
                            <div className="col">Address</div>
                            <div className="col">{selectedClient.postCode}</div>
                        </div>
                        <div className="row">
                            <div className="col">Nationality</div>
                            <div className="col">{selectedClient.nationality}</div>
                        </div>
                        <div className="row">
                            <div className="col">Primary contact</div>
                            <div className="col">{selectedClient.phoneContact}</div>
                        </div>
                        <div className="row">
                            <div className="col">Email</div>
                            <div className="col">{selectedClient.Email}</div>
                        </div>
                    </div>

                    <div className="col-5">
                       
                    </div>
                </div>

                {/* <br /><h3>Bio</h3>
                <div className="col">
                    <div className="row">
                        {selectedClient.Bio}[Insert bio]
                </div>
                </div> */}

                <div className="row">

                    {selectedClient.careNeeds != null  &&  
                    <div className="col">
                        <br /><h3>Care Needs</h3>
                        {selectedClient.careNeeds.map((value, i) => {
                            return <div key={i}>{value}</div>
                        })}
                    </div>
                    }

                    {selectedClient.careServices != null  &&    
                    <div className="col">
                        <br /><h3>Care Services</h3>
                        {selectedClient.careServices.map((value, i) => {
                            return <div key={i}>{value}</div>
                        })}
                    </div>
                    }

                    {selectedClient.interests != null  && 
                    <div className="col">
                        <br /><h3>Interests</h3>
                        {selectedClient.interests.map((value, i) => {
                            return <div key={i}>{value}</div>
                        })}
                    </div>
                    }
                </div>
            </div>

        )
    }
}

//function mapStateToProps(state){return ({})}

export default Profile
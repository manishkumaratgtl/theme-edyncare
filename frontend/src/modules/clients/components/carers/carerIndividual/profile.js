import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carersIndiv: {
                name: { surname: "", firstName: "" }
                , CareExperience: []
                , CareServices: []
                , AreasOfInterest: []
                , AquisitionChannel: [],
                DBS: { Status: "" }
            },
            isLoading: true
        };
    }

    componentDidMount() {

        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer/' + this.props.selectCarerId, {
            method: "GET",
            body: null,
        }).then((response) => {
            if (response.status !== 200) {
                console.log("Handle error" + response.status)
                return
            }
            response.json().then((data) => {
                this.setState({ 
                    carersIndiv: data,
                    isLoading: false
                })
            })
        })
    }


    render() {

        const selectedCarer = this.state.carersIndiv

        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div className="container">
                <br /><h3>Information</h3>
                <div className="row">
                    <div className="col">
                        [Insert image]
            </div>

                    <div className="col-5">
                        <div className="row">
                            <div className="col">Name</div>
                            <div className="col">{selectedCarer.name.firstName} {selectedCarer.name.surname}</div>
                        </div>
                        <div className="row">
                            <div className="col">Gender</div>
                            <div className="col">{selectedCarer.gender}</div>
                        </div>
                        <div className="row">
                            <div className="col">DOB</div>
                            <div className="col">{selectedCarer.BirthDate}</div>
                        </div>
                        <div className="row">
                            <div className="col">Address</div>
                            <div className="col">{selectedCarer.PostCode}</div>
                        </div>
                        <div className="row">
                            <div className="col">Nationality</div>
                            <div className="col">{selectedCarer.Nationality}</div>
                        </div>
                        <div className="row">
                            <div className="col">Primary contact</div>
                            <div className="col">{selectedCarer.Phone}</div>
                        </div>
                        <div className="row">
                            <div className="col">Email</div>
                            <div className="col">{selectedCarer.Email}</div>
                        </div>
                    </div>

                    <div className="col-5">
                        <div className="row">
                            <div className="col">Languages</div>
                            <div className="col">{selectedCarer.SpokenEnglish}</div>
                        </div>
                        <div className="row">
                            <div className="col">Works with pets</div>
                            <div className="col">{selectedCarer.NoticePeriod}</div>
                        </div>
                        <div className="row">
                            <div className="col">Drive</div>
                            <div className="col">{selectedCarer.DrivingCapacity}</div>
                        </div>
                        <div className="row">
                            <div className="col">Car</div>
                            <div className="col">{selectedCarer.DrivingCapacity}</div>
                        </div>
                        <div className="row">
                            <div className="col">Licence</div>
                            <div className="col">{selectedCarer.DBS.Status}</div>
                        </div>
                    </div>
                </div>

                <br /><h3>Bio</h3>
                <div className="col">
                    <div className="row">
                        {selectedCarer.Bio}[Insert bio]
                </div>
                </div>

                {/*
                <div className="row">
                    <div className="col">
                        <br /><h3>Experiance</h3>
                        {/* {selectedCarer.CareExperiance.map((value, i) => {
                            return <div key={i}>{value}</div>
                        })} 
                        {selectedCarer.CareExperience.map((value, i) => {
                            return <div key={i}>{value}</div>
                        })}
                    </div>

                    <div className="col">
                        <br /><h3>Skills</h3>
                        {selectedCarer.CareServices.map((value, i) => {
                            return <div key={i}>{value}</div>
                        })}
                    </div>

                    <div className="col">
                        <br /><h3>Interests</h3>
                        {selectedCarer.AreasOfInterest.map((value, i) => {
                            return <div key={i}>{value}</div>
                        })}
                    </div>
                </div>
                */}
            </div>

        )
    }
}

//function mapStateToProps(state){return ({})}

export default Profile
import React, { Component } from 'react';
import '../../../../../scss/custom/profile-card.css';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carersIndiv: {
                name : { surname : "" , firstName : ""}
                , address : { houseNumber : "" , street : "", town : "", postCode : ""}
                , CareExperiance: []
                , CareServices: []
                , AreasOfInterest: []
                , AquisitionChannel: []
                , Languages: []
            },
            isLoading: true
        };
    }

    componentDidMount(){

        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer/' + this.props.selectCarerId, {
            method: "GET",
            body: null,
        }).then((response)=> {
            if (response.status!== 200){
                console.log("Handle error"+ response.status)
                return
            }
            response.json().then((data)=> {
                console.log("Successful load"+ response.status)
                console.log("Number of entries"+ data)
                this.setState({
                    carersIndiv: data,
                    isLoading: false
                })
            })
        })
    }
    
    render(){

    const selectedCarer= this.state.carersIndiv

    if (this.state.isLoading) {
        return <div>Is loading...</div>
    }
    
        return (
            <div className= "container mt-3 " id="profile-card">
                <div className="header"></div>
                <div className="container-fluid no-gutter ">



                    <div className="container-fluid no-gutter profile-name">
                        <h1>{selectedCarer.name.firstName} {selectedCarer.name.surname}</h1>
                        <div  id="summary-items"  >
                            <div className=" summary-item ">
                                <h1 className=" ">Distance</h1>
                                <p className=" ">5 Miles</p>
                            </div>
                            <div className="summary-item ">
                                <h1 className=" ">Languages</h1>
                                <p className=" ">English</p>
                            </div>
                            <div className=" summary-item ">
                                <h1 className=" ">Experience</h1>
                                <p className=" ">4 years</p>
                            </div>
                        
                            

                        </div>
                    </div>
                    <div className=" profile-item">
                        <h3>Biography</h3>
                        <div className= "">
                            <p>
                                {selectedCarer.Bio}[Insert bio]
                            </p>
                        </div>
                    </div>
                    <div className=" profile-item">
                        <h3>Experience</h3>
                        <div className= "">
                            
                            {selectedCarer.CareExperiance.map((value, i)=> {
                            return <p key={i}>{value}</p>})}
                            
                        </div>
                    </div>


                <br/><h3>Information</h3>
                <div className= "row">
                <div className= "col">
                    [Insert image]
                </div>

            

                <div className= "col-5 ">
                        <div className= "row">
                            <div className= "col">Name</div>                            
                            <div className= "col">{selectedCarer.name.firstName} {selectedCarer.name.surname}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Gender</div>                            
                            <div className= "col">{selectedCarer.gender}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">DOB</div>                            
                            <div className= "col">{selectedCarer.dateOfBirth}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Address</div>                            
                            <div className= "col">
                                {selectedCarer.address.houseNumber}
                                {selectedCarer.address.street}
                                {selectedCarer.address.town}
                                {selectedCarer.address.postCode}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Nationality</div>                            
                            <div className= "col">{selectedCarer.nationality}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Primary contact</div>                            
                            <div className= "col">{selectedCarer.phoneContact}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Email</div>                            
                            <div className= "col">{selectedCarer.Email}</div>
                        </div>
                    </div>

                <div className= "col-5">
                        {/*<div className= "row">
                            <div className= "col">Languages</div> 
                            <div className= "col"> 
                            {selectedCarer.Languages.map((value, i)=> {
                                return <p key={i}>{value},{' '}</p>})}  
                            </div>
                        </div>*/}
                        <div className= "row">
                            <div className= "col">Works with pets</div>                            
                            <div className= "col">{selectedCarer.Pets}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Drive</div>                            
                            <div className= "col">{selectedCarer.DrivingCapacity}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Car</div>                            
                            <div className= "col">{selectedCarer.Car}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Licence</div>                            
                            <div className= "col">{selectedCarer.Licence}</div>
                        </div>
                    </div>
                </div>

                <br/>
            
                <div className= "row">
                    <div className= "col">
                    <br/><h3>Experiance</h3>
                        {selectedCarer.CareExperiance.map((value, i)=> {
                            return <div key={i}>{value}</div>})}
                    </div>
            
                    <div className= "col">
                    <br/><h3>Skills</h3>
                        {selectedCarer.CareServices.map((value, i)=> {
                            return <div key={i}>{value}</div>})}
                    </div>
                
                    <div className= "col">
                    <br/><h3>Interests</h3>    
                        {selectedCarer.AreasOfInterest.map((value, i)=> {
                            return <div key={i}>{value}</div>})}
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

//function mapStateToProps(state){return ({})}

export default Profile
import React, { Component } from 'react';
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
//import { decideCarerRound } from '../../../../actions/AdminActions'

import CollapsibleItem from '../collapsible_item'
import style from '../../../../../../scss/custom/collapsible.css'

import { Field, reduxForm, formValueSelector } from 'redux-form';
//import RenderFields from './../.../../../../components/reduxFormFields/render_fields';

import RoundDecision from './round_decision'


class CarerOnBoardingP1 extends Component {
    constructor(props) {
        super(props);
        this.updateStatus = this.updateStatus.bind(this);
    }

    updateStatus(event){

        console.log("event", event)

        const updated= {
            TableName: "carer-dev",
            Key: { 
                Id: this.props.selectedCarer.Id
            },
            UpdateExpression: "set #Field = :Input",
            ExpressionAttributeNames: {
                "#Field": "Status"
            },
            ExpressionAttributeValues: {
                ":Input": event
            },
            Id: this.props.selectedCarer.Id,
            Status: event,
            Email: this.props.selectedCarer.Email,
        }

        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer/update', {
                method: "POST",
                body: JSON.stringify(updated),
            }
        )
        //window.location.reload();
    }

    render(){

        const selectedCarer= this.props.selectedCarer

        return (
            <div>
            <div className= "container p-4 m-4" style= {{width: "auto", border: "2px solid grey"}}>
                <h2 >Carer On-boarding P1 questionaire</h2>

                <CollapsibleItem roleTitle= {"Contact details"}>
                    <div className= "container">
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
                            <div className= "col"></div>
                        </div>
                        <div className= "row">
                            <div className= "col">Nationality</div>                            
                            <div className= "col">{selectedCarer.nationality}</div>
                        </div>
                    </div>
                </CollapsibleItem>

                <CollapsibleItem roleTitle= {"Care experiance"}>
                    <div className= "container">
                        <div className= "row">
                            <div className= "col">Years experiance:</div>                            
                            <div className= "col">{selectedCarer.YearsOfExp}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Relevent care qualifications:</div>                            
                            <div className= "col">{selectedCarer.CareQualification}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Desired workload:</div>                            
                            <div className= "col">{selectedCarer.DesiredWorkload}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Experiance with:</div>                       
                            <div className= "col">{selectedCarer.CareExperiance.map((value, i)=>{
                                return <div key={i}>{value}</div>})}</div>
                        </div>

                        <div className= "row">
                            <div className= "col">Care services/ Comfortable doing:</div>                            
                            <div className= "col">{selectedCarer.CareServices.map((value, i)=>{
                                return <div key={i}>{value}</div>})}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Uncomfortable doing:</div>                            
                            <div className= "col">{selectedCarer.UncomfortableDoing}</div>
                        </div>
                    </div>
                </CollapsibleItem>

                <CollapsibleItem roleTitle= {"Language and RTW"}>
                    <div className= "container">
                        <div className= "row">
                                <div className= "col">Langauges</div>                            
                                <div className= "col">{selectedCarer.SpokenEnglish}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">RTW in UK</div>                            
                            <div className= "col">{selectedCarer.RightToWork} </div>
                        </div>
                    </div>
                </CollapsibleItem>

                <CollapsibleItem roleTitle= {"Final few"}>
                    <div className= "container">
                        <div className= "row">
                            <div className= "col">Has smart phone</div>                            
                            <div className= "col">{selectedCarer.HasSmartPhone}</div>
                        </div>
                        <div className= "row">
                            <div className= "col">Drive</div>                            
                            <div className= "col">{selectedCarer.DrivingCapacity} </div>
                        </div>
                        <div className= "row">
                            <div className= "col">Current notice period</div>                            
                            <div className= "col">{selectedCarer.NoticePeriod} </div>
                        </div>
                        <div className= "row">
                            <div className= "col">How hear about edyn.care</div>                            
                            <div className= "col">{selectedCarer.AquisitionChannel.map((value, i)=>{
                                return <div key={i}>{value}</div>})} 
                            </div>
                        </div>
                    </div>
                </CollapsibleItem>

                <CollapsibleItem roleTitle= {"Lets get to know you better"}>
                    <div className= "container">
                            <div className= "row">
                                <div className= "col">Interests</div>                            
                                <div className= "col">{selectedCarer.AreasOfInterest.map((value, i)=>{
                                        return <div key={i}>{value}</div>})}</div>
                                </div>
                                <div className= "row">
                                    <div className= "col">Happy to do following tasks</div>                            
                                    <div className= "col">{selectedCarer.Tasks} </div>
                                </div>
                        </div>
                </CollapsibleItem>
            </div>
            <RoundDecision updateStatus= {this.updateStatus} round= {"Online questionaire"} passUpdate= {"P1- Pass"} failUpdate= {"P1- Rejected"}/>
            </div>
        )
    }
}

export default CarerOnBoardingP1

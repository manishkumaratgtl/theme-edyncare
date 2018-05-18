import React, { Component } from 'react';
import { Panel, PanelGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import cross from '../../../../images/icons/cross.svg';
import tick from '../../../../images/icons/tick.svg';
import avatar from '../../../../images/photos/old_man.png';
import roset from '../../../../images/icons/roset.svg';
import moon from '../../../../images/icons/moon.svg';
import loo from '../../../../images/icons/loo.svg';
import cleaning from '../../../../images/icons/cleaning.svg';
import food from '../../../../images/icons/food.svg';
import medication from '../../../../images/icons/medication.svg';
import handshake from '../../../../images/icons/handshake.svg';
import run from '../../../../images/icons/run.svg';

class VisitDetails extends Component {


    render() {
        const dataObj =
            {
                startTime: "11:30 am",
                endTime: "01:30 pm",
                name: "Abhishek Modi",
                date: "Sunday 13th May",
                address: "Surat",
                status: "In Progress",
                carePlan: {},
                dailyTasks: {
                    companionship: true,
                    housekeeping: false,
                    mealPrep: true,
                    medication: false,
                    mobility: false,
                    personalCare: false,
                    exercise: false,
                    trannsportation: false
                },
                wellness: {
                    overallMood: 2,
                    sleepQuality: 8,
                    comfortLevels: 4,
                    exerciseLevels: 6,
                    noOfMeals: 4,
                    noOfBowelMovements: 4
                },
                carersNote: "Test comment place here ",
                emergencyContacts: {
                    client: 1234567888,
                    edynOffice: 123132123,
                    emergency: 999
                }
            }
        return (
            <div>
                <div className="row no-gutter">
                    <div className="col-3 no-gutter"></div>
                    <div className="col-6 no-gutter text-center">
                        <img src={avatar} style={{ height: "120px" }} />
                        <h2 className="h4 text-secondary my-3">{dataObj.name}</h2>
                        <span className="spanBlock">{dataObj.startTime + " - " + dataObj.endTime}</span>
                        <span className="spanBlock">{dataObj.date}</span>
                        <button type="button" disabled className="btn btn-outline-status mt-2">{dataObj.status}</button>

                    </div>
                    <div className="col-3 no-gutter"></div>
                </div>

                <div className="accordion" id="accordion">
                    <div className="card mt-3">
                        <div className="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
                            <h5 className="mb-0">
                                <strong>Care Plan</strong>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show accordianCardBG" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                Nothing here.
                    </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h5 className="mb-0">
                                <strong>   Daily Tasks</strong>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse accordianCardBG" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush accordianCardBG">
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={roset} className="icon mr-2" />Companionship</span>

                                        {
                                            dataObj.dailyTasks.companionship ?
                                                <span className="badge"><img style={{ height: "20px" }} src={tick} /></span> :
                                                <span className="badge"><img style={{ height: "20px" }} src={cross} /></span>
                                        }

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={cleaning} className="icon mr-2" /> Housekeeping</span>
                                        {
                                            dataObj.dailyTasks.housekeeping ?
                                                <span className="badge"><img style={{ height: "20px" }} src={tick} /></span> :
                                                <span className="badge"><img style={{ height: "20px" }} src={cross} /></span>
                                        }

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={food} className="icon mr-2" />Meal preparation</span>
                                        {
                                            dataObj.dailyTasks.mealPrep ?
                                                <span className="badge"><img style={{ height: "20px" }} src={tick} /></span> :
                                                <span className="badge"><img style={{ height: "20px" }} src={cross} /></span>
                                        }

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={medication} className="icon mr-2" />Medication</span>
                                        {
                                            dataObj.dailyTasks.medication ?
                                                <span className="badge"><img style={{ height: "20px" }} src={tick} /></span> :
                                                <span className="badge"><img style={{ height: "20px" }} src={cross} /></span>
                                        }

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={food} className="icon mr-2" />Mobility</span>
                                        {
                                            dataObj.dailyTasks.mobility ?
                                                <span className="badge"><img style={{ height: "20px" }} src={tick} /></span> :
                                                <span className="badge"><img style={{ height: "20px" }} src={cross} /></span>
                                        }

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={handshake} className="icon mr-2" />Personal care</span>
                                        {
                                            dataObj.dailyTasks.personalCare ?
                                                <span className="badge"><img style={{ height: "20px" }} src={tick} /></span> :
                                                <span className="badge"><img style={{ height: "20px" }} src={cross} /></span>
                                        }

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={run} className="icon mr-2" />Exercise</span>
                                        {
                                            dataObj.dailyTasks.exercise ?
                                                <span className="badge"><img style={{ height: "20px" }} src={tick} /></span> :
                                                <span className="badge"><img style={{ height: "20px" }} src={cross} /></span>
                                        }

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={roset} className="icon mr-2" />Transportation</span>
                                        {
                                            dataObj.dailyTasks.trannsportation ?
                                                <span className="badge"><img style={{ height: "20px" }} src={tick} /></span> :
                                                <span className="badge"><img style={{ height: "20px" }} src={cross} /></span>
                                        }

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h5 className="mb-0">
                                <strong>Wellness</strong>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse accordianCardBG" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item  accordianCardBG">
                                        <span className="float-left mb-3"><img src={roset} className="icon mr-2" />Overall Mood</span>
                                        <span className="badge badge-secondary badge-pill float-right mb-3">{dataObj.wellness.overallMood}</span>
                                        <input type="range" min="0" max="10" defaultValue={dataObj.wellness.overallMood} className="slider" id="myRange" />
                                    </li>
                                    <li className="list-group-item  accordianCardBG">
                                        <span className="float-left mb-3"><img src={moon} className="icon mr-2" />Sleep Quality</span>
                                        <span className="badge badge-secondary badge-pill float-right mb-3">{dataObj.wellness.sleepQuality}</span>
                                        <input type="range" min="0" max="10" defaultValue={dataObj.wellness.sleepQuality} className="slider" id="myRange" />
                                    </li>
                                    <li className="list-group-item  accordianCardBG">
                                        <span className="float-left mb-3"><img src={medication} className="icon mr-2" />Comfort Levels</span>
                                        <span className="badge badge-secondary badge-pill float-right mb-3">{dataObj.wellness.comfortLevels}</span>
                                        <input type="range" min="0" max="10" defaultValue={dataObj.wellness.comfortLevels} className="slider" id="myRange" />
                                    </li>
                                    <li className="list-group-item  accordianCardBG">
                                        <span className="float-left mb-3"><img src={run} className="icon mr-2" />Exercise Levels</span>
                                        <span className="badge badge-secondary badge-pill float-right mb-3">{dataObj.wellness.exerciseLevels}</span>
                                        <input type="range" min="0" max="10" defaultValue={dataObj.wellness.exerciseLevels} className="slider" id="myRange" />
                                    </li>
                                    <li className="list-group-item  accordianCardBG">
                                        <span className="float-left mb-3"><img src={food} className="icon mr-2" />No. of Meals</span>
                                        <span className="badge badge-secondary badge-pill float-right mb-3">{dataObj.wellness.noOfMeals}</span>
                                        <input type="range" min="0" max="10" defaultValue={dataObj.wellness.noOfMeals} className="slider" id="myRange" />
                                    </li>
                                    <li className="list-group-item  accordianCardBG">
                                        <span className="float-left mb-3"><img src={loo} className="icon mr-2" />No. of Bowel Movements</span>
                                        <span className="badge badge-secondary badge-pill float-right mb-3">{dataObj.wellness.noOfBowelMovements}</span>
                                        <input type="range" min="0" max="10" defaultValue={dataObj.wellness.noOfBowelMovements} className="slider" id="myRange" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-header" id="heading4" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            <h5 className="mb-0">
                                <strong>Carer's Note</strong>
                            </h5>
                        </div>
                        <div id="collapse4" className="collapse accordianCardBG" aria-labelledby="heading4" data-parent="#accordion">
                            <div className="form-group card-body">
                                <input type="text" className="form-control" defaultValue={dataObj.carersNote} placeholder="please add your daily note here." id="email" />
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-header" id="heading5" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            <h5 className="mb-0">
                                <strong>Emergency contact</strong>
                            </h5>
                        </div>
                        <div id="collapse5" className="collapse accordianCardBG" aria-labelledby="heading5" data-parent="#accordion">
                            <div align="center" className="card-body text-center row no-gutter">
                                <a className="btn btn-secondary col-2 ml-1 no-gutter" href={"tel:" + dataObj.emergencyContacts.client}>Carer</a>
                                <a className="btn btn-secondary col-5 mx-2 no-gutter" href={"tel:" + dataObj.emergencyContacts.edynOffice}>Edyn Care Office</a>
                                <a className="btn btn-secondary col-3 mr-1" href={"tel:" + dataObj.emergencyContacts.emergency}>Emergency</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5" align="center">
                    <div className="row no-gutter">
                        <div className="col-1 no-gutter"></div>
                        <div className="col-3 no-gutter text-center">

                            <span className="spanBlock">Start</span>
                            <span className="h4 text-secondary">{dataObj.startTime}</span>

                        </div>
                        <div className="col-2 no-gutter"></div>
                        <div className="col-2 no-gutter"></div>
                        <div className="col-3 no-gutter text-center ">
                            <span className="spanBlock">End</span>
                            <span className="h4 text-secondary">{dataObj.endTime}</span>

                        </div>
                        <div className="col-1 no-gutter"></div>

                        <button className="btn btn-secondary btn-lg mt-3 col-12 no-gutter">
                            End Visit
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default VisitDetails;

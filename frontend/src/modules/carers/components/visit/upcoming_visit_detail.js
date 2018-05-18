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

class UpcomingVisitDetails extends Component {


    render() {
        const dataObj =
            {
                startTime: "11:30 am",
                endTime: "01:30 pm",
                name: "Abhishek Modi",
                date: "Sunday 13th May",
                address: "Richmond TW7 6JC",
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
                services: [
                    {
                        name: "Alzheimer's disease"
                    },
                    {
                        name: "Cancer treatment"
                    }
                ],
                earnings: {
                    time: "2 Hours",
                    charge: "12/h",
                    total: "24"
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
                    <div className="col-2 no-gutter"></div>
                    <div className="col-8 no-gutter text-center">
                        <h3 className="h5" align="center">Your next appointment</h3>
                        <img src={avatar} style={{ height: "120px" }} />
                        <h2 className="h4 text-secondary my-3">{dataObj.name}</h2>
                        <span className="spanBlock">{dataObj.startTime + " - " + dataObj.endTime}</span>
                        <span className="spanBlock">{dataObj.date}</span>
                        <span className="spanBlock">{dataObj.address}</span>

                    </div>
                    <div className="col-2 no-gutter"></div>
                </div>

                <div className="accordion" id="accordion">

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
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={cleaning} className="icon mr-2" /> Housekeeping</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={food} className="icon mr-2" />Meal preparation</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={medication} className="icon mr-2" />Medication</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={food} className="icon mr-2" />Mobility</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={handshake} className="icon mr-2" />Personal care</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={run} className="icon mr-2" />Exercise</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center accordianCardBG">
                                        <span><img src={roset} className="icon mr-2" />Transportation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h5 className="mb-0">
                                <strong>Services</strong>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse accordianCardBG" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item  accordianCardBG">
                                        <span>{dataObj.services[0].name}</span>
                                    </li>
                                    <li className="list-group-item  accordianCardBG">
                                        <span>{dataObj.services[1].name}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-header" id="heading4" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            <h5 className="mb-0">
                                <strong>Earnings</strong>
                            </h5>
                        </div>
                        <div id="collapse4" className="collapse accordianCardBG" aria-labelledby="heading4" data-parent="#accordion">
                            <li className="list-group-item  accordianCardBG card-body">
                                <div className="text-center row no-gutter">
                                    <div className="col-3 no-gutter">{dataObj.earnings.time}</div>
                                    <div className="col-2 no-gutter">x</div>
                                    <div className="col-2 no-gutter">&pound;{dataObj.earnings.charge}</div>
                                    <div className="col-2 no-gutter">=</div>
                                    <div className="col-2 no-gutter">&pound;{dataObj.earnings.total}</div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="mt-2" align="center">
                    <button type="button" className="btn btn-primary btn-lg mt-3 col-12 no-gutter" data-toggle="modal" data-target="#exampleModalCenter">
                        Get me there
                    </button>

                </div>
                {/* / <!-- Modal --> */}
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{ background: "#32535A", color: "#FBF8EF !important" }}>

                            <div className="modal-body">
                                <button type="button" className="close mb-3" data-dismiss="modal" aria-label="Close">
                                    <span style={{ color: "#FBF8EF" }} aria-hidden="true">&times;</span>
                                </button><br />
                                <p style={{ color: "#FBF8EF", textAlign: "center", fontSize: "x-large" }}><b>Have you arrived ?</b></p>
                                <p className="text-center" style={{ color: "#FBF8EF" }} > Your GPS location will be recorded while checking in.</p>
                                <p style={{ color: "#FBF8EF", textAlign: "center", fontSize: "large" }}>Start time</p>
                                <span className="spanBlock" style={{ color: "#FBF8EF", textAlign: "center" }}>{dataObj.startTime}</span>
                            </div>
                            <button type="button" className="btn btn-sm btn-danger m-3" style={{ background: "#F2989A", color: "white" }} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpcomingVisitDetails;

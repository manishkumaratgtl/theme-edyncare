import React, { Component } from 'react';
import history from '../../../../history';
import avatar from '../../../../images/photos/old_man.png';

class CarerVisit extends Component {
    constructor() {
        super()

        var curr = new Date;
        var startDate = new Date(curr.setDate(curr.getDate() - curr.getDay()));
        var endDate = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));

        var arr = [];;

        var getDateArray = function (start, end) {

            var dt = new Date(start);
            while (dt <= end) {
                arr.push(new Date(dt).getDate());
                dt.setDate(dt.getDate() + 1);
            }
            return arr;
        }

        getDateArray(startDate, endDate);
        this.fetchVisitsByDate = this.fetchVisitsByDate.bind(this);
        // this.visitDetailedView = this.visitDetailedView.bind(this);
        this.state = {
            dataObj: [
                {
                    startTime: "11:30 am",
                    endTime: "1:30 pm",
                    name: "Abhishek Modi",
                    address: "Surat",
                    date: arr[0],
                    recurring: true,

                },
                {
                    startTime: "9:30 am",
                    endTime: "10:30 pm",
                    name: "Sudev gandhi",
                    address: "Ahmedabad",
                    date: arr[0],
                    recurring: false
                },
                {
                    startTime: "10:30 am",
                    endTime: "12:30 pm",
                    name: "James shield",
                    address: "UK",
                    date: arr[4],
                    recurring: false
                },
                {
                    startTime: "11:30 am",
                    endTime: "1:30 pm",
                    name: "Manish kumar",
                    address: "Mohali",
                    date: arr[5],
                    recurring: true
                }
            ],
            filteredArray: [],
            selectedDate: "this week",
            CalObject: [
                {
                    dayName: "SUN",
                    date: arr[0]
                },
                {
                    dayName: "MON",
                    date: arr[1]
                },
                {
                    dayName: "TUE",
                    date: arr[2]
                },
                {
                    dayName: "WED",
                    date: arr[3]
                },
                {
                    dayName: "THU",
                    date: arr[4]
                },
                {
                    dayName: "FRI",
                    date: arr[5]
                },
                {
                    dayName: "SAT",
                    date: arr[6]
                }
            ]
        }

    }

    componentWillMount() {
        this.setState({ filteredArray: this.state.dataObj });
    }

    resetFilter() {
        this.setState({ filteredArray: this.state.dataObj });
    }

    fetchVisitsByDate = function (dataObj, date) {
        // console.log('dd----------', dataObj, date);
        let filtered = [];
        dataObj.filter(function (item, i) {
            if (item.date === date) {
                filtered.push(item)
            };
        });
        this.setState({ filteredArray: filtered, selectedDate: date + '-05' });
    }

    weekCalendar() {

        return this.state.CalObject.map((exp, i) => {
            return (
                <label key={i} style={{ cursor: "pointer" }} onClick={() => this.fetchVisitsByDate(this.state.dataObj, exp.date)} className={"col-1 no-gutter m-2 " + (new Date().getDay() === i ? 'text-primary' : '')}>
                    <span className="spanBlock">{exp.dayName}</span>
                    <span className="spanBlock" >{exp.date}</span>
                </label>
            );
        });
    }

    visit() {

        return this.state.filteredArray.map((item, i) => {
            return (
                <div key={i} onClick={() => history.push('/portal-carer/visit/ongoing-visit-detail/' + item.name)} className="card hoverDiv">
                    <div className="card-body row no-gutter">
                        <div className="col-sm-1 no-gutter"></div>
                        <div className="col-3 col-sm-2 no-gutter text-center mt-1">
                            <span className="spanBlock">{item.startTime}</span>
                            <span className="spanBlock">to</span>
                            <span className="spanBlock">{item.endTime}</span>
                        </div>
                        <div className="col-2 col-sm-5 no-gutter">
                        </div>
                        <div className="col-4 col-sm-2 no-gutter text-right mt-1 mr-2">
                            <span className="spanBlock">{item.name}</span>
                            <span className="spanBlock">{item.address}</span>
                        </div>
                        <div className="col-1 col-sm-1 no-gutter mt-1">
                            <img src={avatar} style={{ height: "50px" }} />
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="col-sm-12 no-gutter">
                <div className="" align="center">
                    <h2><strong>May 2018</strong></h2>
                    {this.weekCalendar()}
                </div>
                <h2 className="text-center"> <strong>Visits for {this.state.selectedDate}</strong></h2>
                {this.visit()}
                <div className="mt-5" align="center">
                    <button className="btn btn-secondary btn-lg col-5">
                        Get Me There
                    </button>
                    <button onClick={() => this.resetFilter()} className="btn btn-success btn-lg ml-2">
                        reset
                    </button>
                </div>
            </div>

        );
    }
}

export default CarerVisit;

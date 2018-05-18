import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import matchSorter from 'match-sorter'



class CarerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carersList: [],
            isLoading: true,
            isError: false,
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);

    }

    componentDidMount() {
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer-list/ghjgghjgh', {
            method: "GET",
            body: null,
        }).then((response) => {
            if (response.status !== 200) {
                console.log("error", response)
                this.setState({
                    isError: true
                })
                return
            }
            response.json().then((data) => {
                this.setState({
                    carersList: data,
                    isLoading: false
                })
            })
        })
    }

    handleButtonClick(param) {
        const data = {
            carerID: param,
            clientID: "someID",
            clientName: "Abhishek"
        }
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'care-request', {
            method: "POST",
            body: JSON.stringify(data, null, 2),
        }).then(function (response) {
            if (response.status === 200) {
                response.json().then(json => {
                    toast.success("lets wait for carer to respond", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                });
            }

        }, function (error) {
            toast.error("Something went wrong, pls try again", {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }

    render() {

        const columns = [

            {
                Header: 'Profile',
                id: "Profile",
                accessor: d => <NavLink to={"/portal-client/carers/" + d.Id}> {d.name.firstName} {d.name.surname}</NavLink>,
                filterable: false,
                sortable: false
            },
            {
                id: "StatusID",
                Header: 'Status',
                accessor: "Status",
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["StatusID"] }),
                filterAll: true
            },
            {
                Header: 'Distance',
                id: "distance",
                accessor: d => d.distances.distance.text + " (" + d.distances.duration.text + ")",
                filterable: false,
                sortable: true
            },
            {
                Header: 'Select carer',
                id: "selectCarer",
                accessor: d => <button className="btn btn-success" onClick={(e) => this.handleButtonClick(d.Id)}>Select</button>,
                filterable: false,
                sortable: false
            },
        ]



        return (
            <div>
                <ToastContainer />
                <ReactTable
                    data={this.state.carersList}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    showPagination={false}
                />
            </div>
        )
    }
}

export default CarerList
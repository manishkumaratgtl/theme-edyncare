import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import ReactTable from 'react-table'
import "react-table/react-table.css";
import matchSorter from 'match-sorter'

import Auth from '../../../../components/auth/auth';

class CarePlanList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            careplanList: [],
            isLoading: true
        };
    }

    componentDidMount() {
        const auth = new Auth();
        const clientId = auth.getUserId()

        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'care-plan' + clientId + '/',  {
            method: "GET",
            body: null,
        }).then((response) => {
            if (response.status !== 200) {
                console.log("Handle error"+ response.status)
                return
            }
            response.json().then((data) => {
                this.setState({
                    careplanList: data,
                    isLoading: false
                })
            })
        })
    }


    render(){

        const columns = [
            {
                id: "date",
                Header: 'Date',
                accessor: "Date",
                filterAll: true
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
                Header: 'Profile',
                id: "Profile",
                accessor: d => <NavLink to={"/portal-admin/careplan/" + d.Id}> {d.Id}</NavLink>,
                filterable: false,
                sortable: false
            },

        ]

        return(
            <div className= "container-float">
                <ReactTable
                    data={this.state.recipientList}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    columns={columns}
                    defaultPageSize={3}
                    className="-striped -highlight"
                    showPagination={false}
                />
            </div>
        )
    }
}

export default CarePlanList
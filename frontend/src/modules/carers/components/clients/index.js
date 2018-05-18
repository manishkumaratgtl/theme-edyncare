import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import ReactTable from 'react-table'
import "react-table/react-table.css";
import matchSorter from 'match-sorter'

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipientList: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'client', {
            method: "GET",
            body: null,
        }).then((response) => {
            if (response.status !== 200) {
                console.log("Handle error"+ response.status)
                return
            }
            response.json().then((data) => {
                this.setState({
                    recipientList: data,
                    isLoading: false
                })
            })
        })
    }


    render(){

        const columns = [
            {
                id: "firstName",
                Header: 'First name',
                accessor: d => d.name.firstName,
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["firstName"] }),
                filterAll: true
            },
            {
                id: "surName",
                Header: 'Surname',
                accessor: d => d.name.surname,
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["surname"] }),
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
                accessor: d => <NavLink to={"/portal-admin/carers/" + d.Id}> {d.Id}</NavLink>,
                filterable: false,
                sortable: false
            },

        ]

        return(
            <div className= "container-float">
                <a>List of clients per carer</a>
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

export default Clients
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
// import { selectCarer } from '../../actions/AdminActions';
// Todo, import from B/E with full features
//import Carer1 from "./sampleCarerOnBoarding"
//const CarersAll= [Carer1, Carer1, Carer1, Carer1, Carer1]

class CarerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carersList: []
        }
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer', {
            method: "GET",
            body: null,
        }).then((response) => {
            if (response.status !== 200) {
                console.log("Handle error"+ response.status)
                return
            }
            response.json().then((data) => {
                console.log("data", data)
                this.setState({
                    carersList: data,
                    isLoading: false
                })
            }).catch((error)=> {
                console.log("Handle error 2"+ error)
            })
        })
    }

    render() {

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
                accessor: d => <NavLink to={"/portal-admin/carer/" + d.Id}> {d.Id}</NavLink>,
                filterable: false,
                sortable: false
            },
        ]

        return (
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
        )
    }
}

export default CarerList
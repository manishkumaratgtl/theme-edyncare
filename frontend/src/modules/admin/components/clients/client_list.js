import React, { Component } from 'react';
// import { connect } from "react-redux"
// import { bindActionCreators } from "redux";
import { NavLink } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import matchSorter from 'match-sorter';


class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientList: [],
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'client', {
      method: 'GET',
      body: null,
    }).then((response) => {
      if (response.status !== 200) {
        return;
      }
      response.json().then((data) => {
        this.setState({
          clientList: data,
        });
      });
    });
  }

  render() {

    const columns = [

      {
        id: 'FirstName',
        Header: 'First name',
        accessor: (d) => d.name.firstName,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['firstName'] }),
        filterAll: true,
      },
      {
        id: 'Surname',
        Header: 'Surname',
        accessor: (d) => d.name.surname,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['surname'] }),
        filterAll: true,
      },
      {
        id: 'StatusID',
        Header: 'Status',
        accessor: 'Status',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['StatusID'] }),
        filterAll: true,
      },
      {
        Header: 'Profile',
        id: 'Profile',
        accessor: (d) => <NavLink to= {'/portal-admin/client/' + d.Id}> {d.Id}</NavLink>,
        filterable: false,
        sortable: false,
      },

    ];

    return (
      <ReactTable
        data={this.state.clientList}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
        showPagination={false}
      />
    );
  }
}


export default ClientList;

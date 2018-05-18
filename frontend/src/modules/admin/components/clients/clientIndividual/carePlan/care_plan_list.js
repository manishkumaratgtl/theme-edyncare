import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
// import matchSorter from 'match-sorter'

// Load care plan on clientId and careplanId

class CarePlanList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careplanList: [],
    };
  }

  componentDidMount() {

    // Todo, add ClientId to getItem index so searchable, then + this.props.selectClientId
    fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'careplan/' + this.props.selectClientId + '/', {
      method: 'GET',
      body: null,
    }).then((response) => {
      if (response.status !== 200) {
        console.log('Handle error' + response.status);
        return;
      }
      console.log('response', response);
      response.json().then((data) => {
        console.log('Successful load' + response.status);
        this.setState({
          careplanList: data,
        });
      });
    });
  }

  render() {

    const columns = [
      { Header: 'recipient.firstName',
        accessor: 'recipient.firstName' },
      { Header: 'recipient.surname',
        accessor: 'recipient.surname' },
      { Header: 'UpdatedDate',
        accessor: 'UpdatedDate' },
      { Header: 'Serial',
        id: 'Serial',
        accessor: 'serial' },
      { Header: 'CarePlanId',
        id: 'CarePlanId',
        accessor: 'CarePlanId' },
      { Header: 'Status',
        id: 'Status',
        accessor: 'Status' },
    ];

    return (
      <div className= "container p-4 m-4" style= {{ width: 'auto', border: '2px solid grey' }}>


        {this.props.selectClientId}

        <h2 className= "pb-4">List of care plans for Client linked to Client Id</h2>
        <ReactTable
          data={this.state.careplanList}
          columns={columns}
          minRows= {0}
          defaultPageSize= {5}
          showPaginationBottom= {false}
          className="-striped -highlight"
          defaultSorted={[
            {
              id: 'Serial',
              desc: true,
            },
          ]}
        />
      </div>
    );
  }
}

export default CarePlanList;

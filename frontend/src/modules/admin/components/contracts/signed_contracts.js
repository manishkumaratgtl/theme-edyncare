import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import matchSorter from 'match-sorter'

class SignedContracts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contractList: [
                {
                    signatureData: {
                        files_url: "",
                        is_complete: false,
                        signatures: [
                            { signer_email_address: "Contract" },
                            { signer_email_address: "contract" }
                        ]

                    }
                }],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'contract/signed-contracts', {
            method: "GET",
            body: null,
        }).then((response) => {
            if (response.status !== 200) {
                toast.error(response.status, "Something went wrong, please try again", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return
            }
            response.json().then((data) => {
                this.setState({
                    contractList: data,
                    isLoading: false
                })
            })
        })
    }

    render() {

        const columns = [

            {
                id: "is_complete",
                Header: 'Contracted signed',
                accessor: d => { return d.is_complete ? "Yes" : "No" },
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["is_complete"] }),
                filterable: false
            },
            {
                id: "Carer_Email",
                Header: 'Carer Email',
                accessor: d => d.signatures[0].signer_email_address + " (" + d.signatures[0].signer_name + ")",
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["signer_email_address"] }),
                filterable: false
            },
            {
                id: "Client Email",
                Header: 'Client_Email',
                accessor: d => { return d.signatures[1] === undefined ? "carer contract" : d.signatures[1].signer_email_address + " (" + d.signatures[1].signer_name + ")" },
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["signer_email_address"] }),
                filterAll: true,
                filterable: false
            },
            {
                Header: 'Download contract',
                id: "download",
                accessor: d => <button className="btn btn-primary" onClick={(e) => window.open(d.files_url, "_blank")}>download</button>,
                filterable: false,
                sortable: false
            },
        ]

        if (this.state.isLoading) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div>
                <ToastContainer />
                <ReactTable
                    data={this.state.contractList}
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
export default SignedContracts
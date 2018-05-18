import React, { Component } from 'react';

//Load care plan on clientId and careplanId

class CarePlanView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            careplan: [],
        };
    }

    componentDidMount(){
        fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'careplan/' + this.props.selectClientId + '/', {
            method: "GET",
            body: null,
        }).then((response)=> {
            if (response.status!== 200){
                console.log("Handle error"+ response.status)
                return
            }
            response.json().then((data)=> {
                this.setState({
                    careplan: data
                })
            })
        })
    }

    render(){
        return(
            <div className= "container p-4 m-4" style= {{width: "auto", border: "2px solid grey"}}>
                <h2 className= "pb-4">View care plan</h2>
                    {JSON.stringify(this.state.careplan)}
            </div>
        )
    }
}

export default CarePlanView
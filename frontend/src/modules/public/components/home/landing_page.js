import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ClientMailingList from '../landingPage/client_mailing_list';
import '../../../../scss/custom/basic.css'
import '../../../../scss/custom/LandingPage.css'
import Auth from '../../../../components/auth/auth';

var styling= {
    maxHeight: "100px",
    maxWidth: "auto",
    padding: "30px"
}

var styling2= {
    width: "60%",
    height: "60%",
    minWidth: "250px"
}


class LandingPage extends Component {

    handleClick(){
        document.getElementById('LOOKING_FOR_CARE').scrollIntoView();
    }

    render() {
        const auth = new Auth();
        const { isAuthenticated, userHasAccess, login, logout } = auth;

        return (
                <div className= "color6" style= {{position: "absolute", height: "100%", width: "100%"}}>
                    
                    <div style= {{ zIndex: "-1"}}>
                        <img src={require('../../../../images/brandingExports/leaves_fullpage.svg')} className="background-top-right" style= {{height: "100%"}} alt="Edyn Care" />
                        <img src={require('../../../../images/brandingExports/logo_normal.svg')} className="background-top-left" alt="Edyn Care" style= {styling} />
                    </div>

                    <div className= "row no-gutter justify-content-end h-25" >
                    <div className= "col-8 no-gutter text-right px-3">
                        <span className= "">    
                            {
                                !isAuthenticated() && (
                                <button className="align-middle btn btn-login white py-3 my-3"  onClick={login}>Login</button>
                                )
                            }
                            {
                                isAuthenticated() && (
                                <button className="align-middle btn btn-login white py-3 my-3" onClick={logout}> Logout</button>
                                )
                            }
                        </span>
                        <span className= "px-3">
                            <NavLink className="align-middle btn btn-client white py-3 my-3" to="/client-on-boarding">Clients</NavLink>
                        </span>
                        <span className= "">    
                            <NavLink className="align-middle btn btn-carer white py-3" to="/carer-on-boarding">Carers</NavLink>
                        </span>
                    </div>
                    </div>
                    
                    <div className= "row no-gutter align-items-center h-50" >
                        <div className= "col-10 my-auto mx-auto no-gutter"  >
                            <div className="row no-gutter align-items-center" style={{margin: "auto"}}>
                                <div className= "col-12 no-gutter pb-4" >
                                    <img src={require('../../../../images/brandingExports/eydncare_greenwhite.svg')} className="" alt="Edyn Care" style= {styling2}/>
                                </div>
                                <div className= "col-12 no-gutter pb-4">
                                    <h2>Hand-selected carers</h2>
                                    <h2>Supported by cutting edge technology</h2>
                                </div>
                                <div className= "col-12 no-gutter">
                                    <h3>Coming June 2018</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*
                    <div className= "row no-gutter align-items-end h-25" >
                        <div className= "col-10 mx-auto no-gutter" >
                            <div className="row no-gutter align-items-end">
                                <div onClick= {this.handleClick} className= "col-12 no-gutter text-center">
                                    <svg fill="#32525B" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" transform="scale(2)"/>
                                        <path d="M0-.75h24v24H0z" fill="none" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}

                </div>
        )
    }
}
export default LandingPage
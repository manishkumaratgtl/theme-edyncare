import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import "./../../../scss/custom/adminTemplate.css";
import ClientMenu from "./client_menu";

import Auth from "../../../components/auth/auth"

export default class AdminTemplate extends Component {

    render() {
        const userAuth = new Auth()

        return (
            <div className="container-fluid p-0 ">
                <div className="container-fluid p-0">
                    <NavLink className="navbar-brand" to="/">
                        <img src={require('./../../../images/designAssets/logos/png/edyn_ranged_logo.png')} className="logo" alt="Edyn Care" />
                    </NavLink>
                    UserId: {userAuth.getUserId()}
                </div>
                <div className="row  p-2">
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <nav className="navbar navbar-light navbar-expand-md  flex-column flex-nowrap">
                            <div className="navbar-collapse collapse " id="navbarWEX">
                                <div className="nav flex-sm-column flex-row">
                                    <ClientMenu />
                                </div>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarWEX" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon "></span>
                            </button>
                        </nav>
                    </div>
                    <div className="col p-3">
                        <div className="container-fluid p-0">{this.props.pageContent}</div>
                    </div>
                </div>
                <div className="d-flex justify-content-center bg-light p-3  ">edyn care</div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import '../../../scss/custom/adminTemplate.css';
import AdminMenu from './admin_menu';

import Auth from '../../../components/auth/auth';

class AdminTemplate extends Component {
  render() {
    const userAuth = new Auth();
    return (
      <div className="container-fluid p-0 color7 h-100">
        <div className="row container-fluid no-gutter p-0">
          <NavLink className="navbar-brand logoContainer no-gutter" to="/"><img src={require('../../../images/designAssets/logos/png/edyn_ranged_logo.png')} className="logo m-auto " alt="Edyn Care" /></NavLink>
          <div id="headerRight" className=" row no-gutter ml-auto m-3 ">
            <span className="dropdown">
              <button type="button" className="btn btn-rad4 btn-icon" data-toggle="dropdown">
                <div className="d-inline">
                  <img className="icon-header" src={require('../../../images/icons/message.svg')}/>
                  <div className=" d-inline bg-dark number-header"></div>
                </div>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item " href="#">New Message from Alex Eccleston</a>
                <a className="dropdown-item" href="#">New Message from Alex Eccleston</a>
                <a className="dropdown-item last-item" href="#">View all messages</a>
              </div>
            </span>
            <div className="d-inline ml-5">
              <img className="icon-header" src={require('../../../images/icons/bell.svg')}/>
              <div className=" d-inline bg-dark number-header"></div>
            </div>
            <span className=" ml-5">
              <a className="colorT8  phoneNumber" href="tel://0800123456">0800 123456
              </a>
            </span>
            <span className="dropdown ml-5  ">
              <button type="button" className="btn btn-rad4 btn-primary dropdown-toggle" data-toggle="dropdown">
                User Name
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">My Profile</a>
                <a className="dropdown-item" href="#">Payment Details</a>
                <a className="dropdown-item " href="#">Change Password</a>
                <a className="dropdown-item last-item" href="#">Log Out</a>
              </div>
            </span>
          </div>
        </div>
        <div className="row  no-gutter">
          <div className="col-auto no-gutter ">
            <nav className="navbar navbar-light navbar-expand-md  flex-column flex-nowrap">
              <div className="navbar-collapse collapse " id="navbarWEX">
                <div className="nav flex-sm-column flex-row">
                  <AdminMenu/>
                </div>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarWEX" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
              </button>
            </nav>
          </div>
          <div className="col p-3">
            <div id="pageTitle"className="w-100">
              <div className=" d-inline">
                <NavLink to="/portal-admin/carers"><img className="icon-back" src={require('../../../images/icons/back.svg')}/></NavLink>
              </div>
              <div className="d-inline pageTitleText">Page Title
              </div>
            </div>
            <div className="container-fluid p-0">{this.props.pageContent}</div>
          </div>
        </div>
        <div id="footer-admin">
          <div className="logoContainer">
            <img src={require('../../../images/designAssets/logos/png/edyn_ranged_logo.png')} className="logo center " alt="Edyn Care" />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminTemplate;

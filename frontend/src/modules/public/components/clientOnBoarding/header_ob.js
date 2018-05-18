import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../../../scss/custom/basic.css'

class HeaderOB extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-md navbar-light" id= "HEADER">
        <NavLink className="navbar-brand" to="/"><img src={require('../../../images/designAssets/logos/png/edyn_ranged_logo.png')} style={{ height: 55 }} alt="Edyn Care" /></NavLink>
        <div className="ml-auto " id="">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item right align-middle p-4">
              <div><h2 className="colorT8">0800 123456</h2></div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderOB

import React, { Component } from 'react';
import Template from './../../../containers/App';
import Auth from '../../../components/auth/auth';

class AdminTemplate extends Component {
  render() {
    const userAuth = new Auth();
    return (
      <Template />
    );
  }
}

export default AdminTemplate;

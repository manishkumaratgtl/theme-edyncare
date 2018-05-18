import React, { Component } from 'react';
import PublicPortalWrap from './routers';
import PublicTemplate from './layouts/public_template';

export default class PublicPortal extends Component {
  render() {
    return (
      <div>
        <PublicTemplate pageContent={<PublicPortalWrap />} />
      </div>
    );
  }
}

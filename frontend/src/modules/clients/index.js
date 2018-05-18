import React, { Component } from 'react';
import ClientTemplate from './layouts/client_template';
import ClientPortalWrap from './routers';

export default class ClientPortal extends Component {
    render() {
        return (
            <div>
                <ClientTemplate pageContent={<ClientPortalWrap />} />
            </div>
        )
    }
}

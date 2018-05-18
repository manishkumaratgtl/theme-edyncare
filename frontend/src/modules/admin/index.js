import React, { Component } from 'react';

import AdminTemplate from './layouts/template';
import AdminPortalPreWrap from './routers';

export default class AdminPortal extends Component {
    render() {
        return (
            <div className="h-100">
                <AdminTemplate pageContent={<AdminPortalPreWrap />} />
            </div>
        )
    }
}

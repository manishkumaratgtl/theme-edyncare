import React, { Component } from 'react'

import CarerTemplate from "./layouts/carer_template";
import CarerPortalPreWrap from './routers';

export default class CarerPortal extends Component {
    render() {
        return (
            <div>
                <CarerTemplate pageContent={<CarerPortalPreWrap />} />
            </div>
        )
    }
}

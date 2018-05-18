import React, { Component } from 'react';
import Header from '../../../../containers/header';
import Footer from '../../../../containers/footer';
import OpenRoles from '../edynCareers/open_roles';
import Apply from '../edynCareers/apply';
import CareersComp from '../edynCareers/careers_comp';
import ComeMake from "../edynCareers/come_make";

export default class CareersMain extends Component {
    render() {
        return (
            <div>
                <Header />
                <CareersComp/>
                <ComeMake/>
                <Apply /> 
                <OpenRoles />            
                <Footer />
            </div>
        )
    }
}

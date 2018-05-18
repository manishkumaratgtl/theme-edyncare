/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import $ from 'jquery';
import { Scrollbars } from 'react-custom-scrollbars';
import classnames from 'classnames';

// Components
import Header from '../Header/Header';
import SidebarContent from '../Sidebar';

// app config
import AppConfig from '../../constants/AppConfig';

// actions
import { collapsedSidebarAction, startUserTour } from '../../actions';

class MainApp extends Component {

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        const { windowWidth } = this.state;
        window.addEventListener("resize", this.updateDimensions);
        if (AppConfig.enableUserTour && windowWidth > 600) {
            setTimeout(() => {
                this.props.startUserTour();
            }, 2000);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    componentWillReceiveProps(nextProps) {
        const { windowWidth } = this.state;
        if (nextProps.location !== this.props.location) {
            if (windowWidth <= 1199) {
                this.props.collapsedSidebarAction(false);
            }
        }
    }

    updateDimensions = () => {
        this.setState({ windowWidth: $(window).width(), windowHeight: $(window).height() });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    renderPage() {
        const { pathname } = this.props.location;
        const { children } = this.props;
        if (pathname === '/app/chat' || pathname.startsWith('/app/mail') || pathname === '/app/todo') {
            return (
                <div className="rct-page-content">
                    {children}
                </div>
            );
        }
        return (
            <Scrollbars
                className="rct-scroll"
                autoHide
                autoHideDuration={100}
                style={this.getScrollBarStyle()}
            >
                <div className="rct-page-content">
                    {children}
                </div>
            </Scrollbars>
        );
    }

    getScrollBarStyle() {
        return {
            height: 'calc(100vh - 50px)'
        }
    }

    render() {
        const { navCollapsed, rtlLayout, miniSidebar } = this.props.settings;
        const { windowWidth } = this.state;
        const { children, location } = this.props;
        return (
            <div className="app">
                <div className="app-main-container">
                    <Sidebar
                        sidebar={<SidebarContent />}
                        open={windowWidth <= 1199 ? navCollapsed : false}
                        docked={windowWidth > 1199 ? !navCollapsed : false}
                        pullRight={rtlLayout}
                        onSetOpen={() => this.props.collapsedSidebarAction(false)}
                        styles={{ content: { overflowY: '' } }}
                        contentClassName={classnames({ 'app-conrainer-wrapper': miniSidebar })}
                    >
                        <div className="app-container">
                            <div className="rct-app-content">
                                <div className="app-header">
                                    <Header />
                                </div>
                                <div className="rct-page">
                                    {this.renderPage()}
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ settings }) => {
    return { settings }
}

export default withRouter(connect(mapStateToProps, {
    collapsedSidebarAction,
    startUserTour
})(MainApp));

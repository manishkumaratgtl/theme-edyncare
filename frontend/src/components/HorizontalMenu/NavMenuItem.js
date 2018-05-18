/**
 * Nav Menu Item
 */
import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import classnames from 'classnames';

import IntlMessages from '../../util/IntlMessages';

class NavMenuItem extends Component {

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        this.setState({ windowWidth: $(window).width() });
    }

    render() {
        const { menu } = this.props;
        return (
            <li className="nav-item">
                {menu.child_routes !== null ?
                    <Fragment>
                        <a href="javascript:void(0);" className="nav-link">
                            <i className={menu.menu_icon}></i>
                            <IntlMessages id={menu.menu_title} />
                        </a>
                        <ul className="list-unstyled sub-menu-child">
                            {menu.child_routes.map((subMenu, subKey) => (
                                <li className="nav-item" key={subKey}>
                                    <NavLink to={subMenu.path} className="nav-link" activeClassName="active">
                                        <IntlMessages id={subMenu.menu_title} />
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </Fragment> :
                    <NavLink to={menu.path} className="nav-link no-arrow">
                        <i className={menu.menu_icon}></i>
                        <IntlMessages id={menu.menu_title} />
                    </NavLink>
                }
            </li>
        );
    }
}

export default NavMenuItem;


import React from 'react';
import './NavToggle.scss';

const NavToggle = (props) => {
    return (
        <div className="nav__toggle">
            <i className={`icon icon-menu nav__toggle--menu ${!props.navbarState ? 'nav__toggle--active' : ''}`} onClick={props.handleToggle}></i>
            <i className={`icon icon-close nav__toggle--menu ${props.navbarState ? 'nav__toggle--active' : ''}`} onClick={props.handleToggle}></i>
        </div>
    );
};
export default NavToggle;

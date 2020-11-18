
import React from 'react';
import PropTypes from 'prop-types';
import './NavToggle.scss';

const NavToggle = ({navbarState, handleToggle}) => {
    return (
        <div className="nav__toggle">
            <i className={`icon icon-menu nav__toggle--menu ${!navbarState ? 'nav__toggle--active' : ''}`} onClick={handleToggle}></i>
            <i className={`icon icon-close nav__toggle--menu ${navbarState ? 'nav__toggle--active' : ''}`} onClick={handleToggle}></i>
        </div>
    );
};
NavToggle.propTypes = {
    navbarState: PropTypes.bool,
    handleToggle: PropTypes.func
};
export default NavToggle;

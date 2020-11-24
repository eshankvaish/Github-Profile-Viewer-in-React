import React from 'react';
import PropTypes from 'prop-types';

import './NavToggle.scss';

const NavToggle = ({ navbarState, handleToggle }) => (
    <div className="nav__toggle">
        <i className={`icon icon-menu nav__toggle--menu ${!navbarState ? 'nav__toggle--active' : ''}`} onClick={handleToggle} />
        <i className={`icon icon-close nav__toggle--menu ${navbarState ? 'nav__toggle--active' : ''}`} onClick={handleToggle} />
    </div>
);
NavToggle.propTypes = {
    navbarState: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
};
export default NavToggle;

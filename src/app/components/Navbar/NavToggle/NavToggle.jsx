import React from 'react';
import PropTypes from 'prop-types';

import './NavToggle.scss';

const NavToggle = ({ navbarState, handleToggle }) => (
    <div className="nav-toggle">
        <i
            className={`icon ${navbarState ? 'icon-close' : 'icon-menu'} nav-toggle__menu`}
            onClick={handleToggle}
            role="presentation"
        />
    </div>
);

NavToggle.propTypes = {
    navbarState: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
};

export default NavToggle;

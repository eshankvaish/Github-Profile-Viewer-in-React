import React from 'react';
import PropTypes from 'prop-types';
import './NavLogo.scss';
import NavToggle from '../NavToggle/NavToggle';
import NavLogoItem from '../NavLogoItem/NavLogoItem';

const NavLogo = ({navbarState, handleToggle}) => {
    return (
        <div className="nav__logo">
            <NavLogoItem />
            <NavToggle navbarState={navbarState} handleToggle={handleToggle} />
        </div>
    );
};
NavLogo.propTypes = {
    navbarState: PropTypes.bool,
    handleToggle: PropTypes.func
};
export default NavLogo;

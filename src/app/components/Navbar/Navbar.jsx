import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import NavLogoItem from './NavLogoItem/NavLogoItem';
import NavToggle from './NavToggle/NavToggle';
import NavList from './NavList/NavList';

const Navbar = ({
    navbarState, handleToggle, navList, handleClick,
}) => (
    <header>
        <nav className="nav center-container">
            {/* Nav Logo */}
            <div className="nav__logo">
                <NavLogoItem />
                <NavToggle navbarState={navbarState} handleToggle={handleToggle} />
            </div>
            {/* Nav List Item */}
            <NavList
                navbarState={navbarState}
                navList={navList}
                handleClick={handleClick}
            />
        </nav>
    </header>
);
Navbar.propTypes = {
    navbarState: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
    navList: PropTypes.instanceOf(Array).isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default Navbar;

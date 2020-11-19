import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import NavLogo from './NavLogo/NavLogo';
import NavList from './NavList/NavList';

const Navbar = ({navbarState, handleToggle, navList, handleClick}) => {
    return (
        <header>
            <nav className="nav center-container">
                {/*Nav Logo */}
                <NavLogo navbarState={navbarState} handleToggle={handleToggle} />
                {/* Nav List Item */}
                <NavList navbarState={navbarState} navList={navList} handleClick={handleClick} />
            </nav>
        </header>
    );
};
Navbar.propTypes = {
    navbarState: PropTypes.bool,
    handleToggle: PropTypes.func,
    navList: PropTypes.array,
    handleClick: PropTypes.func
};

export default Navbar;

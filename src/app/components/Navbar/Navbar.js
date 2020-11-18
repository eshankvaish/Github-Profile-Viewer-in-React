import React from 'react';
import './Navbar.scss';
import NavLogo from './NavLogo/NavLogo';
import NavList from './NavList/NavList';

const Navbar = ({navbarState, handleToggle, navList}) => {
    return (
        <header>
            <nav className="nav center-container">
                {/*Nav Logo */}
                <NavLogo navbarState={navbarState} handleToggle={handleToggle} />
                {/* Nav List Item */}
                <NavList navbarState={navbarState} navList={navList} />
            </nav>
        </header>
    );
};
export default Navbar;

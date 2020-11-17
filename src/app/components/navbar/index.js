import React from 'react';
import NavLogo from './navLogo';
import NavList from './navList';

const Navbar = (props) => {
    return (
        <header>
            <nav className="nav center-container">
                {/*Nav Logo */}
                <NavLogo navbarState={props.navbarState} handleToggle={props.handleToggle} />
                {/* Nav List Item */}
                <NavList navbarState={props.navbarState} navList={props.navList} />
            </nav>
        </header>
    );
};
export default Navbar;

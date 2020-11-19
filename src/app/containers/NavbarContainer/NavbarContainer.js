import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';

const NavbarContainer = () => {
    const [navbarState, setNavbarState] = useState({
        navbarOpen: false,
        navList: ['Profile', 'Search', 'Explore']
    });
    const handleToggle = () => {
        setNavbarState({
            ...navbarState,
            navbarOpen: !navbarState.navbarOpen
        });
    };
    const handleClick = () => {
        setNavbarState({
            ...navbarState,
            navbarOpen: false
        });
    };

    return (
        <Navbar navList={navbarState.navList} navbarState={navbarState.navbarOpen} handleClick={handleClick} handleToggle={handleToggle} />
    );
};
export default NavbarContainer;

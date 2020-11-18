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

    return (
        <Navbar navList={navbarState.navList} navbarState={navbarState.navbarOpen} handleToggle={handleToggle} />
    );
};
export default NavbarContainer;

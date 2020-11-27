import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../../components/Navbar/Navbar';

const NavbarContainer = () => {
    const isLoggedIn = useSelector((state) => state.loginState.isLoggedIn);
    const [navbarState, setNavbarState] = useState({
        navbarOpen: false,
    });
    const navList = ['Profile', 'Search', 'Explore', 'Login'];

    if (isLoggedIn) {
        navList[navList.indexOf('Login')] = 'Logout';
    }
    const handleToggle = () => {
        setNavbarState({
            ...navbarState,
            navbarOpen: !navbarState.navbarOpen,
        });
    };
    const handleClick = () => {
        setNavbarState({
            ...navbarState,
            navbarOpen: false,
        });
    };

    return (
        <Navbar
            navList={navList}
            navbarState={navbarState.navbarOpen}
            handleClick={handleClick}
            handleToggle={handleToggle}
        />
    );
};
export default NavbarContainer;

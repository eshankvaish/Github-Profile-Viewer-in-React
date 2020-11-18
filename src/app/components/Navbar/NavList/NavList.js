import React from 'react';
import './NavList.scss';
import NavItem from '../NavItem/NavItem';
import NavLogin from '../NavLogin/NavLogin';

const NavList = ({navList, navbarState}) => {
    return (
        <ul className={`nav__list ${navbarState ? 'nav__list--active' : ''}`}>
            <NavItem navList={navList} />
            <NavLogin />
        </ul>
    );
};
export default NavList;

import React from 'react';
import PropTypes from 'prop-types';
import './NavList.scss';
import NavItem from '../NavItem/NavItem';
import NavLogin from '../NavLogin/NavLogin';

const NavList = ({navList, navbarState, isLoggedIn}) => {
    return (
        <ul className={`nav__list ${navbarState ? 'nav__list--active' : ''}`}>
            <NavItem navList={navList} />
            <NavLogin isLoggedIn={isLoggedIn} />
        </ul>
    );
};
NavList.propTypes = {
    navbarState: PropTypes.bool,
    navList: PropTypes.array
};
export default NavList;

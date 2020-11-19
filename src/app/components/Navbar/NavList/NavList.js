import React from 'react';
import PropTypes from 'prop-types';
import './NavList.scss';
import NavItem from '../NavItem/NavItem';
import NavLogin from '../NavLogin/NavLogin';

const NavList = ({navList, navbarState, isLoggedIn, handleClick}) => {
    return (
        <ul className={`nav__list ${navbarState ? 'nav__list--active' : ''}`}>
            <NavItem navList={navList} handleClick={handleClick} />
            <NavLogin isLoggedIn={isLoggedIn} handleClick={handleClick}  />
        </ul>
    );
};
NavList.propTypes = {
    navbarState: PropTypes.bool,
    navList: PropTypes.array,
    handleClick: PropTypes.func,
    isLoggedIn: PropTypes.bool
};
export default NavList;

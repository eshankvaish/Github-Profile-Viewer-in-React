import React from 'react';
import PropTypes from 'prop-types';

import './NavList.scss';
import NavItem from '../NavItem/NavItem';

const NavList = ({ navList, navbarState, handleClick }) => (
    <ul className={`nav__list ${navbarState ? 'nav__list--active' : ''}`}>
        <NavItem navList={navList} handleClick={handleClick} />
    </ul>
);
NavList.propTypes = {
    navbarState: PropTypes.bool.isRequired,
    navList: PropTypes.instanceOf(Array).isRequired,
    handleClick: PropTypes.func.isRequired,
};
export default NavList;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './NavItem.scss';

const NavItem = ({ navList, handleClick }) => {
    const { t } = useTranslation();
    const navItems = navList.map((navItem) => (
        <li key={navItem} className="nav__list--item">
            <NavLink className="nav__list--link" aria-label={navItem} to={`/${navItem.toLowerCase()}`} onClick={handleClick}>
                {t(navItem)}
            </NavLink>
        </li>
    ));
    return (
        navItems
    );
};
NavItem.propTypes = {
    navList: PropTypes.instanceOf(Array).isRequired,
    handleClick: PropTypes.func.isRequired,
};
export default NavItem;

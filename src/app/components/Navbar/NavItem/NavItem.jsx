import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './NavItem.scss';

const NavItem = ({ navList, handleClick }) => {
    const { t } = useTranslation();
    const navItems = navList.map((navItem) => (
        <li key={navItem} className="nav-list">
            <NavLink className="nav-list__link" aria-label={t(navItem)} to={`/${navItem.toLowerCase()}`} onClick={handleClick}>
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

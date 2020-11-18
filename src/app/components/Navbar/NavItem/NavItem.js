import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NavItem.scss';

const NavItem = ({navList}) => {
    const { t } = useTranslation();
    const navItems = navList.map((navItem) => 
        <NavLink className="nav__list--link" aria-label={navItem} key={navItem} to={`/${navItem.toLowerCase()}`}><li className="nav__list--item">{t(navItem)}</li></NavLink>
    );
    return (
        navItems
    );
};
NavItem.propTypes = {
    navList: PropTypes.array
};
export default NavItem;

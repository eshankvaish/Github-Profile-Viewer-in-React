import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavList = (props) => {
    const { t } = useTranslation();
    const listItems = props.navList.map((navItem) => 
        <NavLink className="nav__list--link" aria-label={navItem} key={navItem} to="#"><li className="nav__list--item">{t(navItem)}</li></NavLink>
    );
    return (
        <ul className={`nav__list ${props.navbarState ? 'nav__toggle--active' : ''}`}>
            {listItems}
            <NavLink className="nav__list--link" aria-label="Login" to="#"><li className="nav__list--item nav__list--last-item">{t('Login')}</li></NavLink>
        </ul>
    );
};
export default NavList;

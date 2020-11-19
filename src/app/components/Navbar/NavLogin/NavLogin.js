import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavLogin = ({isLoggedIn}) => {
    const { t } = useTranslation();
    const navLink = isLoggedIn ? (
        <NavLink className="nav__list--link" aria-label="Logout" to="/logout"><li className="nav__list--item no-border">{t('Logout')}</li></NavLink>
    ) : (
        <NavLink className="nav__list--link" aria-label="Login" to="/login"><li className="nav__list--item no-border">{t('Login')}</li></NavLink>
    );
    return navLink;
};
export default NavLogin;

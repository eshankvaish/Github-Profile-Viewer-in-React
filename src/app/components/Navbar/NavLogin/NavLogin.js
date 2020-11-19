import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavLogin = ({isLoggedIn, handleClick}) => {
    const { t } = useTranslation();
    const navLink = isLoggedIn ? (
        <NavLink className="nav__list--link" onClick={handleClick} aria-label="Logout" to="/logout"><li className="nav__list--item no-border">{t('Logout')}</li></NavLink>
    ) : (
        <NavLink className="nav__list--link" onClick={handleClick} aria-label="Login" to="/login"><li className="nav__list--item no-border">{t('Login')}</li></NavLink>
    );
    return navLink;
};

NavLogin.propTypes = {
    handleClick: PropTypes.func,
    isLoggedIn: PropTypes.bool
};

export default NavLogin;

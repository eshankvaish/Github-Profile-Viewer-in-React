import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavLogin = ({handleClick}) => {
    const { t } = useTranslation();
    //To be completed in RA-3
    return (
        <NavLink className="nav__list--link" onClick={handleClick} aria-label="Login" to="/login"><li className="nav__list--item no-border">{t('Login')}</li></NavLink>
    );
};

NavLogin.propTypes = {
    handleClick: PropTypes.func
};

export default NavLogin;

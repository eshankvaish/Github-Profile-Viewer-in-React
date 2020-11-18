import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavLogin = () => {
    const { t } = useTranslation();
    //To be completed in RA-3
    return (
        <NavLink className="nav__list--link" aria-label="Login" to="/login"><li className="nav__list--item no-border">{t('Login')}</li></NavLink>
    );
};
export default NavLogin;

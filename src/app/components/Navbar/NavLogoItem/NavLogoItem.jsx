import React from 'react';
import { Link } from 'react-router-dom';
import './NavLogoItem.scss';
import { useTranslation } from 'react-i18next';

const NavLogoItem = () => {
    const { t } = useTranslation();

    return (
        <Link to="/">
            <div className="nav__logo--item">
                <i className="icon icon-github nav__logo--icon" />
                <h1 className="nav__logo--company-name">{t('Github')}</h1>
            </div>
        </Link>
    );
};
export default NavLogoItem;

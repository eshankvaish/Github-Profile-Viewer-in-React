import React from 'react';
import { Link } from 'react-router-dom';
import './NavLogoItem.scss';
import { useTranslation } from 'react-i18next';

const NavLogoItem = () => {
    const { t } = useTranslation();

    return (
        <Link to="/">
            <div className="nav-logo__item">
                <i className="icon icon-github nav-logo__icon" />
                <h1 className="nav-logo__company-name">{t('Github')}</h1>
            </div>
        </Link>
    );
};
export default NavLogoItem;

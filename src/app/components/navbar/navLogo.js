import React from 'react';
import { Link } from 'react-router-dom';
import NavToggle from './navToggle';
import { useTranslation } from 'react-i18next';

const NavLogo = (props) => {
    const { t } = useTranslation();

    return (
        <div className="nav__logo">
            <div className="nav__logo--item">
                <Link to="/"><i className="icon icon-github nav__logo--icon"></i></Link>
                <Link to="/"><h1 className="nav__logo--company-name">{t('Github')}</h1></Link>
            </div>
            <NavToggle navbarState={props.navbarState} handleToggle={props.handleToggle} />
        </div>
    );
};
export default NavLogo;

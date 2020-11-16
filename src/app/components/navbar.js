import { NavLink, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <header>
            <nav className="nav center-container">
                {/* Logo Container */}
                <div className="nav__logo">
                    <div>
                        <NavLink to="/"><i className="icon icon-github nav__logo--icon"></i></NavLink>
                    </div>
                    <div className="nav__toggle">
                        <i className="icon icon-menu nav__toggle--menu nav__toggle--active"></i>
                        <i className="icon icon-close nav__toggle--close"></i>
                    </div>
                </div>
                {/* Nav List Item */}
                <ul className="nav__list">
                    <NavLink aria-label="Profile" to="#"><li className="nav__list--item">{t('Profile')}</li></NavLink>
                    <NavLink aria-label="Search" to="#"><li className="nav__list--item">{t('Search')}</li></NavLink>
                    <NavLink aria-label="Explore" to="#"><li className="nav__list--item">{t('Explore')}</li></NavLink>
                    <NavLink aria-label="Login" to="#"><li className="nav__list--item nav__list--last-item">{t('Login')}</li></NavLink>
                </ul>
            </nav>
        </header>
    );
}
export default withRouter(Navbar);

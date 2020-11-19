import React from 'react';
import './Profile.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import UserProfile from './UserProfile/UserProfile';

const Profile = ({loginState}) => {
    const { t } = useTranslation();
    const profileData = loginState.error ? (
        <section className="profile-container center-container">
            <h1>{loginState.error}</h1>
        </section>
    ) : (
        <section className="profile-container center-container">
            <h1 className="heading">{loginState.name ? loginState.name : loginState.username}{t('\'s')} {t('Profile')}</h1>
            <UserProfile loginState={loginState} />
        </section>
    );

    return profileData;
};

Profile.propTypes = {
    loginState: PropTypes.object
};

export default Profile;

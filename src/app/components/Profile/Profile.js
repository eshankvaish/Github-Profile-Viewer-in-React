import React from 'react';
import './Profile.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import UserProfile from './UserProfile/UserProfile';

const Profile = ({loginState}) => {
    const { t } = useTranslation();
    return (
        <section className="profile-container center-container">
            <h1 className="heading">{loginState.name}{t('\'s')} {t('Profile')}</h1>
            <UserProfile loginState={loginState} />
        </section>
    );
};

Profile.propTypes = {
    loginState: PropTypes.object
};

export default Profile;

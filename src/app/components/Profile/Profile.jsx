import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './Profile.scss';
import UserProfile from './UserProfile/UserProfile';
import Loading from '../UI/Loading/Loading';
import Heading from '../UI/Heading/Heading';

const Profile = ({ loginState }) => {
    const { t } = useTranslation();
    const profileHeading = loginState.name ? loginState.name : loginState.username;
    const profileData = loginState.error ? (
        <section className="profile-container center-container" data-test="profile">
            <h1>{loginState.error}</h1>
        </section>
    ) : (
        <section className="profile-container center-container" data-test="profile">
            <Heading
                heading={`${profileHeading}${t('\'s')} ${t('Profile')}`}
                data-test="heading"
            />
            <UserProfile loginState={loginState} data-test="user-profile" />
        </section>
    );

    return loginState.loading ? (
        <section className="profile-container center-container" data-test="profile">
            <Loading />
        </section>
    ) : profileData;
};

Profile.propTypes = {
    loginState: PropTypes.instanceOf(Object).isRequired,
};

export default Profile;

import React from 'react';
import './Profile.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import UserProfile from './UserProfile/UserProfile';
import Loading from '../UI/Loading/Loading';
import Heading from '../UI/Heading/Heading';

const Profile = ({loginState}) => {
    const { t } = useTranslation();
    const profileHeading = loginState.name ? loginState.name : loginState.username;
    const profileData = loginState.error ? (
        <section className="profile-container center-container">
            <h1>{loginState.error}</h1>
        </section>
    ) : (
        <section className="profile-container center-container">
            <Heading 
                heading={`${profileHeading}${t('\'s')} ${t('Profile')}`} 
            />
            <UserProfile loginState={loginState} />
        </section>
    );

    return loginState.loading ? (
        <section className="profile-container center-container">
            <Loading />
        </section>) : profileData;
};

Profile.propTypes = {
    loginState: PropTypes.object
};

export default Profile;

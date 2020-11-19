import React from 'react';
import './ProfileData.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ProfileData = ({loginState}) => {
    const { t } = useTranslation();
    return (
        <ul className="profile__data">
            <li className="profile__data--item">
                <span className="profile__data--attribute">{t('Username')}: </span>{loginState.username} 
            </li>
            <li className="profile__data--item">
                <span className="profile__data--attribute">{t('Location')}: </span>{loginState.location}
            </li>
            <li className="profile__data--item">
                <span className="profile__data--attribute">{t('Followers')}: </span>{loginState.followers_count}
            </li>
            <li className="profile__data--item">
                <span className="profile__data--attribute">{t('Following')}: </span>{loginState.following_count}
            </li>
            <li className="profile__data--item">
                <span className="profile__data--attribute">{t('Bio')}: </span>{loginState.bio ? loginState.bio : 'Not Set'} 
            </li>
            <li className="profile__data--item">
                <span className="profile__data--attribute">{t('Github Profile')}: </span><a href={loginState.profile_link} aria-label="Profile Link">{loginState.profile_link}</a>
            </li>
            <li className="profile__data--item">
                <span className="profile__data--attribute">{t('Email')}: </span>{loginState.email ? loginState.email : 'Not Set'} 
            </li>
            <li className="profile__data--item">
                <span className="profile__data--attribute">{t('Blog')}: </span>{loginState.blog ? loginState.blog : 'Not Set'} 
            </li>     
        </ul>
    );
};

ProfileData.propTypes = {
    loginState: PropTypes.object
};

export default ProfileData;

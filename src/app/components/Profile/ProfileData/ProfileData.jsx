import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './ProfileData.scss';

const ProfileData = ({ loginState }) => {
    const { t } = useTranslation();

    return (
        <ul className="profile__data">
            <li className="profile__data--item">
                <i className="icon icon-alternate_email profile__data--icon" />
                <a href={loginState.profile_link} target="_blank" aria-label="Profile Link" rel="noreferrer">{loginState.username}</a>
            </li>
            { loginState.location ? (
                <li className="profile__data--item">
                    <i className="icon icon-location_on profile__data--icon" />
                    {loginState.location}
                </li>
            ) : '' }
            { loginState.bio ? (
                <li className="profile__data--item">
                    <i className="icon icon-info_outline profile__data--icon" />
                    {loginState.bio}
                </li>
            ) : '' }
            { loginState.email ? (
                <li className="profile__data--item">
                    <i className="icon icon-mail_outline profile__data--icon" />
                    {loginState.email}
                </li>
            ) : '' }
            {loginState.blog ? (
                <li className="profile__data--item">
                    <i className="icon icon-create profile__data--icon" />
                    <a href={loginState.blog} target="_blank" rel="noreferrer">{loginState.blog}</a>
                </li>
            ) : ''}
            <li className="profile__data--item">
                <span className="profile__data--attribute">
                    {t('Followers')}
                    :
                </span>
                {loginState.followers_count}
            </li>
            <li className="profile__data--item">
                <span className="profile__data--attribute">
                    {t('Following')}
                    :
                </span>
                {loginState.following_count}
            </li>
            {loginState.followers_count ? (
                <li className="profile__data--item">
                    <a href={`/${loginState.username}/followers`}>
                        <button type="submit">{t('View Followers')}</button>
                    </a>
                </li>
            ) : '' }
            {loginState.following_count ? (
                <li className="profile__data--item">
                    <a href={`/${loginState.username}/following`}>
                        <button type="submit">{t('View Following')}</button>
                    </a>
                </li>
            ) : '' }
        </ul>
    );
};

ProfileData.propTypes = {
    loginState: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileData;

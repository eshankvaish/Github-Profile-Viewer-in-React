import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './ProfileData.scss';

const ProfileData = ({ loginState }) => {
    const { t } = useTranslation();
    const {
        profileLink, location, bio, email, blog, followersCount, followingCount, username,
    } = loginState;
    return (
        <ul className="profile-data">
            <li className="profile-data__item">
                <i className="icon icon-alternate_email profile-data__icon" />
                <a href={profileLink} target="_blank" aria-label={t('Profile Link')} rel="noreferrer">{username}</a>
            </li>
            { location && (
                <li className="profile-data__item">
                    <i className="icon icon-location_on profile-data__icon" />
                    {location}
                </li>
            )}
            { bio && (
                <li className="profile-data__item">
                    <i className="icon icon-info_outline profile-data__icon" />
                    {bio}
                </li>
            ) }
            { email && (
                <li className="profile-data__item">
                    <i className="icon icon-mail_outline profile-data__icon" />
                    {email}
                </li>
            )}
            {blog && (
                <li className="profile-data__item">
                    <i className="icon icon-create profile-data__icon" />
                    <a href={blog} target="_blank" rel="noreferrer">{blog}</a>
                </li>
            )}
            <li className="profile-data__item">
                <span className="profile-data__attribute">
                    {t('Followers')}
                    :
                </span>
                {followersCount}
            </li>
            <li className="profile-data__item">
                <span className="profile-data__attribute">
                    {t('Following')}
                    :
                </span>
                {followingCount}
            </li>
            {followersCount ? (
                <li className="profile-data__item">
                    <Link to={`/${username}/followers`}>
                        <button type="submit">{t('View Followers')}</button>
                    </Link>
                </li>
            ) : ''}
            {followingCount ? (
                <li className="profile-data__item">
                    <Link to={`/${username}/following`}>
                        <button type="submit">{t('View Following')}</button>
                    </Link>
                </li>
            ) : '' }
        </ul>
    );
};

ProfileData.propTypes = {
    loginState: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileData;

import React from 'react';
import './ProfileData.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ProfileData = ({loginState}) => {
    const { t } = useTranslation();

    return (
        <ul className="profile__data">
            <li className="profile__data--item">
                <i className="icon icon-alternate_email profile__data--icon"></i><a href={loginState.profile_link} target="_blank" aria-label="Profile Link" rel="noreferrer">{loginState.username}</a>
            </li>
            { loginState.location ? (
                <li className="profile__data--item">
                    <i className="icon icon-location_on profile__data--icon"></i>{loginState.location}
                </li> ) : ''   
            }
            { loginState.bio ? (
                <li className="profile__data--item">
                    <i className="icon icon-info_outline profile__data--icon"></i> {loginState.bio}
                </li>) : ''
            }
            { loginState.email ? (
                <li className="profile__data--item">
                    <i className="icon icon-mail_outline profile__data--icon"></i> {loginState.email}
                </li>) : ''
            }
            {loginState.blog ? (
                <li className="profile__data--item">
                    <i className="icon icon-create profile__data--icon"></i> {loginState.blog}
                </li>) : ''
            }
            <li className="profile__data--item">
                <span className="profile__data--attribute">{t('Followers')}: </span>{loginState.followers_count}
            </li> 
            <li className="profile__data--item">
                <span className="profile__data--attribute">{t('Following')}: </span>{loginState.following_count}
            </li> 
        </ul>
    );
};

ProfileData.propTypes = {
    loginState: PropTypes.object
};

export default ProfileData;

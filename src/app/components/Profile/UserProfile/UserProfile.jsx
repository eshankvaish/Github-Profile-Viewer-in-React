import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import ProfileData from '../ProfileData/ProfileData';
import ProfileLink from '../ProfileLink/ProfileLink';
import './UserProfile.scss';

const UserProfile = ({ loginState }) => {
    const { avatar, profileLink } = loginState;
    const { t } = useTranslation();

    return (
        <div className="profile">
            <ProfileAvatar
                className="circle"
                src={avatar}
                alt={t('User Profile Pic')}
            />
            <ProfileData loginState={loginState} />
            <ProfileLink profileLink={profileLink} />
        </div>
    );
};

UserProfile.propTypes = {
    loginState: PropTypes.instanceOf(Object).isRequired,
};

export default UserProfile;

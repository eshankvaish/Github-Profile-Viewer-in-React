import React from 'react';
import './UserProfile.scss';
import PropTypes from 'prop-types';

import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import ProfileData from '../ProfileData/ProfileData';
import ProfileLink from '../ProfileLink/ProfileLink';

const UserProfile = ({ loginState }) => (
    <div className="profile">
        <ProfileAvatar
            className="circle"
            src={loginState.avatar}
            alt="User Profile Pic"
        />
        <ProfileData loginState={loginState} />
        <ProfileLink profileLink={loginState.profile_link} />
    </div>
);

UserProfile.propTypes = {
    loginState: PropTypes.instanceOf(Object).isRequired,
};

export default UserProfile;

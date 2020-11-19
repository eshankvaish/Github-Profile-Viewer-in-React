import React from 'react';
import './UserProfile.scss';
import PropTypes from 'prop-types';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import ProfileData from '../ProfileData/ProfileData';

const UserProfile = ({loginState}) => {
    return (
        <div className="profile">
            <ProfileAvatar className={'profile__avatar--img'} src={loginState.avatar} alt={'User Profile Pic'} />
            <ProfileData loginState={loginState} />
        </div>
    );
};

UserProfile.propTypes = {
    loginState: PropTypes.object
};

export default UserProfile;

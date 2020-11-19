import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../../components/Profile/Profile';

const ProfileContainer = ({loginState}) => {
    return <Profile loginState={loginState} />;
};

ProfileContainer.propTypes = {
    loginState: PropTypes.object
};

export default ProfileContainer;

import React from 'react';
import PropTypes from 'prop-types';

import ProfileContainer from '../../containers/ProfileContainer/ProfileContainer';

const ProfileScene = ({ loginState }) => (
    <ProfileContainer loginState={loginState} />
);

ProfileScene.propTypes = {
    loginState: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileScene;

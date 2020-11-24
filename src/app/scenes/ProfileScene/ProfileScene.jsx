import React from 'react';

import ProfileContainer from '../../containers/ProfileContainer/ProfileContainer';

const ProfileScene = ({ loginState }) => (
    <ProfileContainer loginState={loginState} />
);

export default ProfileScene;

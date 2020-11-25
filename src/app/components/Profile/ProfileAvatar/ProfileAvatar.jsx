import React from 'react';

import './ProfileAvatar.scss';
import Image from '../../UI/Image/Image';

const ProfileAvatar = (props) => (
    <div className="profile__avatar">
        <Image {...props} />
    </div>
);

export default ProfileAvatar;

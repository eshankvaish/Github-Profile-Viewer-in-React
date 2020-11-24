import React from 'react';
import PropTypes from 'prop-types';

import './ProfileAvatar.scss';
import Image from '../../UI/Image/Image';

const ProfileAvatar = (props) => (
    <div className="profile__avatar">
        <Image {...props} />
    </div>
);

ProfileAvatar.propTypes = {
    loginState: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileAvatar;

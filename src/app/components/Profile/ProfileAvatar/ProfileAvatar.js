import React from 'react';
import './ProfileAvatar.scss';
import PropTypes from 'prop-types';
import Image from '../../Image';

const ProfileAvatar = (props) => {
    return (
        <div className="profile__avatar">
            <Image {...props} />
        </div>
    );
};

ProfileAvatar.propTypes = {
    loginState: PropTypes.object
};

export default ProfileAvatar;

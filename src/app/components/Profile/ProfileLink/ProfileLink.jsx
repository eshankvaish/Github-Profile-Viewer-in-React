import React from 'react';
import PropTypes from 'prop-types';

import './ProfileLink.scss';

const ProfileLink = ({ profileLink }) => (
    <div className="github-link">
        <a href={profileLink} aria-label="Profile Link" target="_blank" rel="noreferrer">
            <i className="icon icon-github" />
        </a>
    </div>
);

ProfileLink.propTypes = {
    profileLink: PropTypes.string.isRequired,
};

export default ProfileLink;

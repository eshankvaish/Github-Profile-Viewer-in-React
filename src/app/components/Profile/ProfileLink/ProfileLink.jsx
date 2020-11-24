import React from 'react';

import './ProfileLink.scss';

const ProfileLink = ({ profileLink }) => (
    <div className="github-link">
        <a href={profileLink} aria-label="Profile Link" target="_blank" rel="noreferrer">
            <i className="icon icon-github" />
        </a>
    </div>
);

export default ProfileLink;

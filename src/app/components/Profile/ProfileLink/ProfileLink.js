import React from 'react';
import './ProfileLink.scss';

const ProfileLink = ({profileLink}) => {
    return (
        <div className="github-link">
            <a href={profileLink} aria-label="Profile Link" rel="noreferrer"><i className="icon icon-github"></i></a>
        </div>
    );
};

export default ProfileLink;

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './ProfileLink.scss';

const ProfileLink = ({ profileLink }) => {
    const { t } = useTranslation();

    return (
        <div className="github-link">
            <a href={profileLink} aria-label={t('Profile Link')} target="_blank" rel="noreferrer">
                <i className="icon icon-github" />
            </a>
        </div>
    );
};

ProfileLink.propTypes = {
    profileLink: PropTypes.string.isRequired,
};

export default ProfileLink;

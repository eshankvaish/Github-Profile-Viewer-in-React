import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './FollowersList.scss';
import UserCard from '../../UI/UserCard/UserCard';

const FollowersList = ({ followers }) => {
    const { t } = useTranslation();
    const followersItem = followers.map((follower) => (
        <UserCard key={follower.id} user={follower} />
    ));

    return (
        followers.length ? (
            followersItem
        ) : (
            <div className="no-followers">
                {t('Nothing to show')}
            </div>
        )
    );
};

FollowersList.propTypes = {
    followers: PropTypes.instanceOf(Array).isRequired,
};

export default FollowersList;

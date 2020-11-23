import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import './FollowersList.scss';
import FollowersItem from '../FollowersItem/FollowersItem';

const FollowersList = ({followers}) => {
    const {t} = useTranslation();

    return (
        followers.length ? (
            <ul className="followers-list">
                <FollowersItem followers={followers} />
            </ul>
        ) : (
            <div className="no-followers">
                {t('Nothing to show')}
            </div>
        )
    );
};

FollowersList.propTypes = {
    followers: PropTypes.array
};

export default FollowersList;

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './Followers.scss';
import Loading from '../UI/Loading/Loading';
import FormErrors from '../FormErrors/FormErrors';
import FollowersList from './FollowersList/FollowersList';
import Heading from '../UI/Heading/Heading';

const Followers = ({ followersState, username }) => {
    const { t } = useTranslation();
    const followersData = followersState.loading ? (
        <div className="followers center-container">
            <Loading data-test="loading" />
        </div>
    ) : (
        <div className="followers center-container" data-test="followers">
            <Heading heading={`${t(followersState.title)} - ${username}`} data-test="heading" />
            <FormErrors error={followersState.error} data-test="form-errors" />
            <FollowersList followers={followersState.followersData} data-test="follower-list" />
        </div>
    );
    return followersData;
};

Followers.protoType = {
    followersState: PropTypes.instanceOf(Object).isRequired,
    username: PropTypes.string.isRequired,
};

export default Followers;

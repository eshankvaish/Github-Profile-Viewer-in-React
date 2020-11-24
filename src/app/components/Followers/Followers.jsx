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
            <Loading />
        </div>
    ) : (
        <div className="followers center-container">
            <Heading heading={`${t(followersState.title)} - ${username}`} />
            <FormErrors error={followersState.error} />
            <FollowersList followers={followersState.followersData} />
        </div>
    );
    return followersData;
};

Followers.protoType = {
    followersState: PropTypes.object,
    username: PropTypes.string,
};

export default Followers;

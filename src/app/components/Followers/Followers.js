import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Followers.scss';
import Loading from '../Loading';
import FormErrors from '../FormErrors/FormErrors';
import FollowersList from './FollowersList/FollowersList';

const Followers = ({followersState, username}) => {
    const {t} = useTranslation();
    const followersData = followersState.loading ? (
        <div className="followers center-container">
            <Loading />
        </div>
    ) : (
        <div className="followers center-container">
            <div className="heading">{t(followersState.title)} - {username}</div>
            <FormErrors error={followersState.error} />
            <FollowersList followers={followersState.followersData} />
        </div>
    );
    return followersData;
};

Followers.protoType = {
    followersState: PropTypes.object,
    username: PropTypes.string
};

export default Followers;

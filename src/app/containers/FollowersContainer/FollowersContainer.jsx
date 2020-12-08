import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Followers from '../../components/Followers/Followers';
import { followersApiAction } from '../../store/actions/followersAction';

const FollowersContainer = ({ match }) => {
    const dispatch = useDispatch();
    const followersState = useSelector((state) => state.followersState);
    const { username } = match.params;

    useEffect(() => {
        dispatch(followersApiAction(username)); // Call to API
    }, []);

    return <Followers followersState={followersState} username={username} />;
};

FollowersContainer.propTypes = {
    match: PropTypes.instanceOf(Object).isRequired,
};

export default FollowersContainer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Followers from '../../components/Followers/Followers';
import followingApiAction from '../../actions/followingApiAction';

const FollowingContainer = ({ match }) => {
    const dispatch = useDispatch();
    const followersState = useSelector((state) => state.followersState);
    const { username } = match.params;

    useEffect(() => {
        dispatch(followingApiAction(username)); // Call to API
    }, []);

    return <Followers followersState={followersState} username={username} />;
};

FollowingContainer.propTypes = {
    match: PropTypes.instanceOf(Object).isRequired,
};

export default FollowingContainer;

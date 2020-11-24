import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Followers from '../../components/Followers/Followers';
import followingApiAction from '../../actions/followingApiAction';

const FolloweringContainer = ({ match }) => {
    const dispatch = useDispatch();
    const followersState = useSelector((state) => state.followersState);
    const { username } = match.params;

    useEffect(() => {
        dispatch(followingApiAction(username)); // Call to API
    }, []);

    return <Followers followersState={followersState} username={username} />;
};

export default FolloweringContainer;

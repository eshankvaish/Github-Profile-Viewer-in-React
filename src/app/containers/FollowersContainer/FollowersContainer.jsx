import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Followers from '../../components/Followers/Followers';
import followersApiAction from '../../actions/followersApiAction';

const FollowersContainer = ({ match }) => {
    const dispatch = useDispatch();
    const followersState = useSelector((state) => state.followersState);
    const { username } = match.params;

    useEffect(() => {
        dispatch(followersApiAction(username)); // Call to API
    }, [username, dispatch]);

    return <Followers followersState={followersState} username={username} />;
};

export default FollowersContainer;

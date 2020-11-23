import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Followers from '../../components/Followers/Followers';
import followersApiAction from '../../actions/followersApiAction';

const FollowersContainer = (props) => {
    const dispatch = useDispatch();
    const followersState = useSelector(state => state.followersState);
    let username = props.match.params.username;

    useEffect(() => {
        dispatch(followersApiAction(username)); //Call to API
    }, []);

    return <Followers followersState={followersState} username={username} />;
};

export default FollowersContainer;

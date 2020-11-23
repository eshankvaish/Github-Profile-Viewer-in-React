import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import exploreApiAction from '../../actions/exploreApiAction';
import Explore from '../../components/Explore/Explore';
import followAction from '../../actions/followAction';

const ExploreContainer = ({auth_token}) => {
    const exploreState = useSelector(state => state.exploreState);
    const dispatch = useDispatch();

    const fetchData = (lastIndexId=exploreState.lastIndex, presentUserData=[], size=4) => {
        dispatch(exploreApiAction(lastIndexId, presentUserData, size));
    };
    //First call to fetch data
    useEffect(() => fetchData(), []);

    //Function for deleting a suggestion
    const handleDeleteUser = (username) => {
        let newUserData = exploreState.userData.filter(user => user.login !== username);
        fetchData(exploreState.lastIndex, [...newUserData], 1);
    };
    //Refresh the suggestions
    const handleRefresh = () => fetchData();

    const handleFollow = (username) => {
        dispatch(followAction(username, auth_token, handleDeleteUser));
    };

    return <Explore
        handleDeleteUser={handleDeleteUser}
        handleRefresh={handleRefresh}
        userData={exploreState.userData}
        erorr={exploreState.error}
        handleFollow={handleFollow}
        loading={exploreState.loading}
    />;
};

export default ExploreContainer;

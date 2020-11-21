import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import exploreApiAction from '../../actions/exploreApiAction';
import Explore from '../../components/Explore/Explore';

const ExploreContainer = () => {
    const exploreState = useSelector(state => state.exploreState);
    const dispatch = useDispatch();

    const fetchData = (lastIndexId=exploreState.lastIndex, presentUserData=[], size=4) => {
        dispatch(exploreApiAction(lastIndexId, presentUserData, size));
    };
    //First call to fetch data
    useEffect(() => fetchData(), []);

    //Function for deleting a suggestion
    const handleDeleteUser = (id) => {
        let newUserData = exploreState.userData.filter(user => user.id !== id);
        fetchData(exploreState.lastIndex, [...newUserData], 1);
    };
    //Refresh the suggestions
    const handleRefresh = () => fetchData();

    return <Explore
        handleDeleteUser={handleDeleteUser}
        handleRefresh={handleRefresh}
        userData={exploreState.userData}
        erorr={exploreState.error}
    />;
};

export default ExploreContainer;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import exploreApiAction from '../../actions/exploreApiAction';
import Explore from '../../components/Explore/Explore';
import followAction from '../../actions/followAction';

const ExploreContainer = ({ authToken }) => {
    const exploreState = useSelector((state) => state.exploreState);
    const dispatch = useDispatch();

    const fetchData = (lastIndexId = exploreState.lastIndex, presentUserData = [], size = 6) => {
        dispatch(exploreApiAction(lastIndexId, presentUserData, size));
    };
    // First call to fetch data
    useEffect(() => fetchData(), []);

    // Function for deleting a suggestion
    const handleDeleteUser = (username) => {
        const newUserData = exploreState.userData.filter((user) => user.login !== username);
        fetchData(exploreState.lastIndex, [...newUserData], 1);
    };
    // Refresh the suggestions
    const handleRefresh = () => fetchData();

    const handleFollow = (username) => {
        dispatch(followAction(username, authToken, handleDeleteUser));
    };

    return (
        <Explore
            handleDeleteUser={handleDeleteUser}
            handleRefresh={handleRefresh}
            userData={exploreState.userData}
            error={exploreState.error}
            handleFollow={handleFollow}
            loading={exploreState.loading}
        />
    );
};

ExploreContainer.propTypes = {
    authToken: PropTypes.string.isRequired,
};

export default ExploreContainer;

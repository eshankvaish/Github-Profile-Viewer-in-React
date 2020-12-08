import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { exploreApiAction } from '../../store/actions/exploreAction';
import Explore from '../../components/Explore/Explore';
import followAction from '../../store/actions/followAction';
import { EXPLORE_USER_DATA_COUNT } from '../../../constants';

const ExploreContainer = ({ authToken }) => {
    const { t } = useTranslation();
    const exploreState = useSelector((state) => state.exploreState);
    const dispatch = useDispatch();

    const fetchData = (
        lastIndexId = exploreState.lastIndex, presentUserData = [], size = EXPLORE_USER_DATA_COUNT,
    ) => {
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
        dispatch(followAction(username, authToken, handleDeleteUser, t));
    };

    return (
        <Explore
            handleDeleteUser={handleDeleteUser}
            handleRefresh={handleRefresh}
            userData={exploreState.userData}
            error={exploreState.error}
            handleFollow={handleFollow}
            loading={exploreState.loading}
            success={exploreState.success}
        />
    );
};

ExploreContainer.propTypes = {
    authToken: PropTypes.string.isRequired,
};

export default ExploreContainer;

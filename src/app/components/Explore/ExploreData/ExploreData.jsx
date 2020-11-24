import React from 'react';
import PropTypes from 'prop-types';

import './ExploreData.scss';
import UserCard from '../../UI/UserCard/UserCard';

const ExploreData = ({ userData, handleDeleteUser, handleFollow }) => {
    // Mapping User data
    const exploreData = userData.map((user) => (
        <UserCard
            key={user.id}
            user={user}
            handleDeleteUser={handleDeleteUser}
            handleFollow={handleFollow}
            followButton
        />
    ));

    return (
        <ul className="explore-data">
            {exploreData}
        </ul>
    );
};

ExploreData.protoTypes = {
    userData: PropTypes.instanceOf(Array).isRequired,
    handleDeleteUser: PropTypes.func.isRequired,
    handleFollow: PropTypes.func.isRequired,
};

export default ExploreData;

import React from 'react';
import './ExploreData.scss';
import PropTypes from 'prop-types';
import UserCard from '../../UI/UserCard/UserCard';

const ExploreData = ({userData, handleDeleteUser, handleFollow}) => {
    //Mapping User data
    const exploreData = userData.map(user => 
        <UserCard key={user.id}
            user={user}
            handleDeleteUser={handleDeleteUser}
            handleFollow={handleFollow}
            followButton={true}
        />
    );

    return (
        <ul className="explore-data">
            {exploreData}
        </ul>
    );
};

ExploreData.protoTypes = {
    userData: PropTypes.array,
    handleDeleteUser: PropTypes.func,
    handleFollow: PropTypes.func
};

export default ExploreData;

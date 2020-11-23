import React from 'react';
import './ExploreData.scss';
import PropTypes from 'prop-types';
import UserData from '../UserData/UserData';

const ExploreData = ({userData, handleDeleteUser, handleFollow}) => {
    //Mapping User data
    const exploreData = userData.map(user => 
        <UserData key={user.id} user={user} handleDeleteUser={handleDeleteUser} handleFollow={handleFollow} />
    );

    return (
        <div className="explore-data">
            {exploreData}
        </div>
    );
};

ExploreData.protoTypes = {
    userData: PropTypes.array,
    handleDeleteUser: PropTypes.func,
    handleFollow: PropTypes.func
};

export default ExploreData;

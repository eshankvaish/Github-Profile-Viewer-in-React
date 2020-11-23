import React from 'react';
import PropTypes from 'prop-types';
import './FollowersItem.scss';

const FollowersItem = ({followers}) => {
    const followersItem = followers.map(follower => 
        <li key={follower.login} className="follower">
            <div className="follower__avatar">
                <img src={follower.avatar_url} alt="User Profile Pic" className="follower__avatar--image" />
            </div>
            <div className="follower__username">
                <a href={`/${follower.login}`}>@{follower.login}</a>
            </div>
        </li>    
    );

    return followersItem;
};

FollowersItem.propTypes = {
    followers: PropTypes.array
};

export default FollowersItem;

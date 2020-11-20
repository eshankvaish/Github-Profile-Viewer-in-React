import React from 'react';
import './UserData.scss';
import PropTypes from 'prop-types';
import Image from '../../Image';

const UserData = ({user, handleDeleteUser}) => {
    //Return User Profile Data
    return (
        <div className="user-data">
            <div className="user-data__remove">
                <a title="Remove Suggestions" aria-label="Remove Suggestion"><i className="icon icon-close user-data__remove--icon" onClick={() => handleDeleteUser(user.id)} ></i></a>
            </div>
            <div className="user-data__avatar">
                <Image className={'user-data__avatar--img'} src={user.avatar_url} alt={'User Profile Pic'} />
            </div>
            <div className="user-data__username">
                <a href={user.html_url} aria-label="User Profile Link" target="_blank" rel="noreferrer">@{user.login}</a>
            </div>
        </div>
    );
};

UserData.propTypes = {
    user: PropTypes.object,
    handleDeleteUser: PropTypes.func
};

export default UserData;

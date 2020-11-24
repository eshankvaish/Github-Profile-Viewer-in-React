import React from 'react';
import Image from '../Image/Image';
import PropTypes from 'prop-types';
import './UserCard.scss';
import { useTranslation } from 'react-i18next';

const UserCard = ({user, handleDeleteUser, handleFollow, followButton}) => {
    const { t } = useTranslation();

    return (
        <li className="user-card">
            {followButton ? (
                <div className="user-card__remove">
                    <a title="Remove Suggestions" aria-label="Remove Suggestion"><i className="icon icon-close user-data__remove--icon" onClick={() => handleDeleteUser(user.login)} ></i></a>
                </div>
            ) : '' }
            <div className="user-card__avatar">
                <Image className={'user-data__avatar--img circle'} src={user.avatar_url} alt={'User Profile Pic'} />
            </div>
            <div className="user-card__username">
                <a href={`/${user.login}`} aria-label="User Profile Link">@{user.login}</a>
            </div>
            {followButton ? (
                <div className="user-card__follow">    
                    <button type="submit" aria-label="Follow" onClick={() => handleFollow(user.login)}>{t('Follow')}</button>
                </div>
            ) : '' }
        </li>
    );
};

UserCard.propTypes = {
    user: PropTypes.object,
    handleDeleteUser: PropTypes.func,
    handleFollow: PropTypes.func,
    followButton: PropTypes.bool
};

export default UserCard;

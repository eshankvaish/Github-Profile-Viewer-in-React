import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Image from '../Image/Image';
import './UserCard.scss';
import Button from '../Button/Button';

const UserCard = ({
    user, handleDeleteUser, handleFollow, followButton,
}) => {
    const { t } = useTranslation();

    return (
        <li className="user-card">
            {followButton ? (
                <Button
                    containerClassName="user-card__remove"
                    type="submit"
                    aria-label="Remove Suggestion"
                    handleClick={() => handleDeleteUser(user.login)}
                    className="icon icon-close user-card__remove--icon"
                />
            ) : '' }
            <div className="user-card__avatar">
                <Image className="user-data__avatar--img circle" src={user.avatar_url} alt="User Profile Pic" />
            </div>
            <div className="user-card__username">
                <a href={`/${user.login}`} aria-label="User Profile Link">
                    @
                    {user.login}
                </a>
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
    user: PropTypes.instanceOf(Object).isRequired,
    handleDeleteUser: PropTypes.func,
    handleFollow: PropTypes.func,
    followButton: PropTypes.bool,
};

UserCard.defaultProps = {
    handleDeleteUser: () => {},
    handleFollow: () => {},
    followButton: () => {},
};

export default UserCard;

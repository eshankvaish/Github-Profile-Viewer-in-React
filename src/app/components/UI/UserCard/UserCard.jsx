import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Image from '../Image/Image';
import './UserCard.scss';
import Button from '../Button/Button';

const UserCard = ({
    user, handleDeleteUser, handleFollow, followButton,
}) => {
    const { t } = useTranslation();

    return (
        <li className="user-card" data-test="user-card">
            {followButton ? (
                <Button
                    containerClassName="user-card__remove"
                    type="submit"
                    aria-label="Remove Suggestion"
                    handleClick={() => handleDeleteUser(user.login)}
                    className="icon icon-close user-card__remove--icon"
                    data-test="remove-button"
                />
            ) : '' }
            <div className="user-card__avatar" data-test="avatar">
                <Image className="user-data__avatar--img circle" src={user.avatar_url} alt="User Profile Pic" />
            </div>
            <div className="user-card__username" data-test="username">
                <Link to={`/${user.login}`} aria-label="User Profile Link">
                    @
                    {user.login}
                </Link>
            </div>
            {followButton ? (
                <div className="user-card__follow">
                    <button
                        type="submit"
                        className="user-card__follow--button"
                        aria-label="Follow"
                        onClick={() => handleFollow(user.login)}
                        data-test="follow-button"
                    >
                        {t('Follow')}
                    </button>
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
    followButton: false,
};

export default UserCard;

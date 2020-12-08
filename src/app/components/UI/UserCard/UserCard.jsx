/* eslint-disable camelcase */
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
    const { avatar_url, login } = user;

    return (
        <li className="user-card" data-test="user-card">
            {followButton ? (
                <Button
                    containerClassName="user-card__remove"
                    type="submit"
                    aria-label={t('Remove Suggestion')}
                    handleClick={() => handleDeleteUser(login)}
                    className="icon icon-close user-card__remove-icon"
                    data-test="remove-button"
                />
            ) : '' }
            <div className="user-card__avatar" data-test="avatar">
                <Image design="circle" src={avatar_url} alt={t('User Avatar')} />
            </div>
            <div className="user-card__username" data-test="username">
                <Link to={`/${login}`} aria-label={t('User Profile Link')}>
                    @
                    {login}
                </Link>
            </div>
            {followButton ? (
                <div className="user-card__follow">
                    <button
                        type="submit"
                        className="user-card__follow-button"
                        aria-label={t('Follow')}
                        onClick={() => handleFollow(login)}
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

import React from 'react';
import './UserData.scss';
import PropTypes from 'prop-types';
import Image from '../../UI/Image/Image';
import { useTranslation } from 'react-i18next';

const UserData = ({user, handleDeleteUser, handleFollow}) => {
    const {t} = useTranslation();
    //Return User Profile Data
    return (
        <div className="user-data">
            <div className="user-data__remove">
                <a title="Remove Suggestions" aria-label="Remove Suggestion"><i className="icon icon-close user-data__remove--icon" onClick={() => handleDeleteUser(user.login)} ></i></a>
            </div>
            <div className="user-data__avatar">
                <Image className={'user-data__avatar--img'} src={user.avatar_url} alt={'User Profile Pic'} />
            </div>
            <div className="user-data__username">
                <a href={`/${user.login}`} aria-label="User Profile Link">@{user.login}</a>
            </div>
            <div className="user-data__username">    
                <button type="submit" aria-label="Follow" onClick={() => handleFollow(user.login)}>{t('Follow')}</button>
            </div>
        </div>
    );
};

UserData.propTypes = {
    user: PropTypes.object,
    handleDeleteUser: PropTypes.func,
    handleFollow: PropTypes.func
};

export default UserData;

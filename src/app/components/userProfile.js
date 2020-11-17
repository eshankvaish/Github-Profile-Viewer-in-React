import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import cleanData from '../utils/cleanData';

const UserProfile = (props) => {
    const { t } = useTranslation();
    let [userData, setUserData] = useState({
        username: '',
        avatar: '',
        location: '',
        following_count: null,
        followers_count: null,
        bio: '',
        profile_link: '',
        blog: '',
        email: ''
    });

    useEffect(() => {
        let apiData = {
            method: 'get',
            url: 'https://api.github.com/users/' + props.match.params.username
        };
        axios(apiData)
            .then(({ data }) => {
                setUserData({
                    username: cleanData(data.login),
                    name: cleanData(data.name),
                    avatar: cleanData(data.avatar_url),
                    location: cleanData(data.location),
                    following_count: data.followers,
                    followers_count: data.following,
                    bio: cleanData(data.bio),
                    profile_link: data.html_url,
                    blog: cleanData(data.blog),
                    email: cleanData(data.email),
                });
            })
            .catch((error) => {
                console.log('Some Error Occured');
            });
    });

    return (
        <section className="profile-container center-container">
            <h1 className="heading">{userData.username}{t("'s")} {t("Profile")}</h1>
            <div className="profile">
                <div className="profile__avatar">
                    <img className="profile__avatar--img" src={userData.avatar} alt="User Profile Pic"/>
                </div>
                <ul className="profile__data">
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Username")}: </span>{userData.username}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Location")}: </span>{userData.location}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Followers")}: </span>{userData.followers_count}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Following")}: </span>{userData.following_count}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Bio")}: </span>{userData.bio}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Github Profile")}: </span><a href={userData.profile_link} aria-label="Profile Link">{userData.profile_link}</a>
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Email")}: </span>{userData.email}
                    </li>
                    <li className="profile__data--item">
                        <span className="profile__data--attribute">{t("Blog")}: </span>{userData.blog}
                    </li>     
                </ul>
            </div>
        </section>
    );
}
export default UserProfile;

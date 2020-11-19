import React, {useEffect, useState} from 'react';
import axios from 'axios';
import cleanData from '../../utils/cleanData';
import Profile from '../../components/Profile/Profile';

const SearchProfileContainer = ({username}) => {
    let [userData, setUserData] = useState({
        username: '',
        avatar: '',
        location: '',
        following_count: null,
        followers_count: null,
        bio: '',
        profile_link: '',
        blog: '',
        email: '',
        error: null
    });

    useEffect(() => {
        let apiData = {
            method: 'get',
            url: `https://api.github.com/users/${username}`
        };
        axios(apiData)
            .then(({ data }) => {
                setUserData({
                    ...userData,
                    username: cleanData(data.login),
                    name: cleanData(data.name),
                    avatar: cleanData(data.avatar_url),
                    location: cleanData(data.location),
                    following_count: data.followers,
                    followers_count: data.following,
                    bio: cleanData(data.bio),
                    profile_link: data.html_url,
                    blog: cleanData(data.blog),
                    email: cleanData(data.email)
                });
            })
            .catch(() => {
                setUserData({
                    ...userData,
                    error: 'Some Error Occured / User Not Found'
                });
            });
    },[]);
    return <Profile loginState={userData} />;
};

export default SearchProfileContainer;

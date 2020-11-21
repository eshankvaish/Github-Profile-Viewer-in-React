import profileAction from './profileAction';
import axios from 'axios';
import cleanData from '../utils/cleanData';

const profileApiAction = (username) => {
    return ((dispatch) => {
        let apiData = {
            method: 'get',
            url: `https://api.github.com/users/${username}`
        };
        axios(apiData)
            .then(({ data }) => {
                dispatch(profileAction({
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
                    error: ''
                }));
            })
            .catch(() => {
                dispatch(profileAction({
                    error: 'Some Error Occured / User Not Found'
                }));
            });
    });
};

export default profileApiAction;

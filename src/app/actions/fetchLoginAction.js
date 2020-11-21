import axios from 'axios';
import cleanData from '../utils/cleanData';
import loginAction from './loginAction';

const fetchLoginAction = (username, auth_token) => {
    return (dispatch) => {
        let apiData = {
            method: 'get',
            url: 'https://api.github.com/user',
            headers: {
                'Authorization': `token ${auth_token}`
            }
        };
        axios(apiData)
            .then(({data}) => {
                if (data.login === username) {
                    //Login Successful
                    dispatch(loginAction({
                        name: cleanData(data.name),
                        avatar: cleanData(data.avatar_url),
                        location: cleanData(data.location),
                        following_count: data.followers,
                        followers_count: data.following,
                        bio: cleanData(data.bio),
                        profile_link: data.html_url,
                        blog: cleanData(data.blog),
                        email: cleanData(data.email),
                        isLoggedIn: true
                    }));
                } else {
                    //Invalid Username
                    dispatch(loginAction({
                        error: 'Invalid Username / Token'
                    }));
                }
            })
            .catch(() => {
                //Invalid Token / Network Error
                dispatch(loginAction({
                    error: 'Please check your token / connection'
                }));
            });
    };
};

export default fetchLoginAction;

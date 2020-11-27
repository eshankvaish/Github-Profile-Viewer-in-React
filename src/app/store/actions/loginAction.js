import axios from 'axios';

import cleanData from '../../utils/cleanData';
import { LOGIN_API } from '../../../conf';
import { LOGIN } from '../actionTypes';

export const loginAction = (payload) => (
    {
        type: LOGIN,
        payload,
    }
);

export const fetchLoginAction = (username, authToken) => (
    (dispatch) => {
        axios(LOGIN_API(authToken))
            .then(({ data }) => {
                if (data.login === username) {
                    // Login Successful
                    dispatch(loginAction({
                        username,
                        authToken,
                        name: cleanData(data.name),
                        avatar: cleanData(data.avatar_url),
                        location: cleanData(data.location),
                        following_count: data.following,
                        followers_count: data.followers,
                        bio: cleanData(data.bio),
                        profile_link: data.html_url,
                        blog: cleanData(data.blog),
                        email: cleanData(data.email),
                        isLoggedIn: true,
                        error: '',
                        loading: false,
                    }));
                } else {
                    // Invalid Username
                    dispatch(loginAction({
                        error: 'Invalid Username / Token',
                        loading: false,
                    }));
                }
            })
            .catch(() => {
                // Invalid Token / Network Error
                dispatch(loginAction({
                    error: 'Please check your token / connection',
                    loading: false,
                }));
            });
    }
);

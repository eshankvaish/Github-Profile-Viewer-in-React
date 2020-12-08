import axios from 'axios';

import actionTypes from '../actionTypes';
import cleanData from '../../utils/cleanData';
import { SEARCH_PROFILE_API } from '../../../constants';
import apiConfig from '../../../service';

const { SEARCH_PROFILE } = actionTypes;

export const profileAction = (payload) => (
    {
        type: SEARCH_PROFILE,
        payload,
    }
);

export const profileApiAction = (username) => (
    (dispatch) => {
        axios(apiConfig('get', SEARCH_PROFILE_API(username)))
            .then(({ data }) => {
                dispatch(profileAction({
                    username: cleanData(data.login),
                    name: cleanData(data.name),
                    avatar: cleanData(data.avatar_url),
                    location: cleanData(data.location),
                    followingCount: data.following,
                    followersCount: data.followers,
                    bio: cleanData(data.bio),
                    profileLink: data.html_url,
                    blog: cleanData(data.blog),
                    email: cleanData(data.email),
                    error: '',
                }));
            })
            .catch(() => {
                dispatch(profileAction({
                    error: 'Some Error Occured / User Not Found',
                }));
            });
    }
);

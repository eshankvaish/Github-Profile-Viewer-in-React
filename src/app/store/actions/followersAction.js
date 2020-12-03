import axios from 'axios';

import actionTypes from '../actionTypes';
import { FOLLOWERS_API } from '../../../constants';
import apiConfig from '../../../service';

const { FETCH_FOLLOWERS, FOLLOWERS_ERROR } = actionTypes;

export const followersAction = (payload) => (
    {
        type: FETCH_FOLLOWERS,
        payload,
    }
);

export const followersErrorAction = () => (
    {
        type: FOLLOWERS_ERROR,
        payload: {
            error: 'Error Fetching User Followers',
        },
    }
);

export const followersApiAction = (username) => (
    (dispatch) => {
        axios(apiConfig('get', FOLLOWERS_API(username)))
            .then(({ data }) => {
                dispatch(followersAction({
                    followersData: data,
                    title: 'Followers',
                }));
            })
            .catch(() => {
                dispatch(followersErrorAction());
            });
    }
);

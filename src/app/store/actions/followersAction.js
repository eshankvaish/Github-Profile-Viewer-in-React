import axios from 'axios';

import { FETCH_FOLLOWERS, FOLLOWERS_ERROR } from '../actionTypes';
import { FOLLOWERS_API } from '../../../conf';

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
        axios(FOLLOWERS_API(username))
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

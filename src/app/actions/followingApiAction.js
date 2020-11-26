import axios from 'axios';

import followersAction from './followersAction';
import followersErrorAction from './followersErrorAction';
import GITHUB_API_URL from '../../conf';

const followingApiAction = (username) => (
    (dispatch) => {
        const config = {
            method: 'get',
            url: `${GITHUB_API_URL}users/${username}/following`,
        };
        axios(config)
            .then(({ data }) => {
                dispatch(followersAction({
                    followersData: data,
                    title: 'Following',
                }));
            })
            .catch(() => {
                dispatch(followersErrorAction());
            });
    }
);

export default followingApiAction;

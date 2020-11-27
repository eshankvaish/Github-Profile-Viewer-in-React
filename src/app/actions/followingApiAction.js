import axios from 'axios';

import followersAction from './followersAction';
import followersErrorAction from './followersErrorAction';

const followingApiAction = (username) => (
    (dispatch) => {
        const config = {
            method: 'get',
            url: `https://api.github.com/users/${username}/following`,
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

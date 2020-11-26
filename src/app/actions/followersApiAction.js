import axios from 'axios';

import followersAction from './followersAction';
import followersErrorAction from './followersErrorAction';
import GITHUB_API_URL from '../../conf';

const followersApiAction = (username) => (
    (dispatch) => {
        const config = {
            method: 'get',
            url: `${GITHUB_API_URL}users/${username}/followers`,
        };
        axios(config)
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

export default followersApiAction;

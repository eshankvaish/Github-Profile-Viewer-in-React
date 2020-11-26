import axios from 'axios';

import followersAction from './followersAction';
import followersErrorAction from './followersErrorAction';
import { FOLLOWERS_API } from '../../conf';

const followersApiAction = (username) => (
    (dispatch) => {
        const config = {
            method: 'get',
            url: `${FOLLOWERS_API(username)}`,
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

import axios from 'axios';

import followersAction from './followersAction';
import followersErrorAction from './followersErrorAction';
import { FOLLOWING_API } from '../../conf';

const followingApiAction = (username) => (
    (dispatch) => {
        const config = {
            method: 'get',
            url: `${FOLLOWING_API(username)}`,
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

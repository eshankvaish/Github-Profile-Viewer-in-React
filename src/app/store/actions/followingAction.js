import axios from 'axios';

import { followersAction, followersErrorAction } from './followersAction';
import { FOLLOWING_API } from '../../../constants';
import apiConfig from '../../../service';

const followingAction = (username) => (
    (dispatch) => {
        axios(apiConfig('get', FOLLOWING_API(username)))
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

export default followingAction;

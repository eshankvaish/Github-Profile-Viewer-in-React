import axios from 'axios';

import searchAction from './searchAction';
import { SEARCH_PROFILE_API } from '../../conf';

const searchApiAction = (username, history) => (
    (dispatch) => {
        const config = {
            method: 'get',
            url: `${SEARCH_PROFILE_API(username)}`,
        };
        axios(config)
            .then(() => {
                history.push(`/${username}`);
                dispatch(searchAction({
                    loading: false,
                }));
            })
            .catch(() => {
                dispatch(searchAction({
                    error: 'No User Found with given Username',
                    loading: false,
                }));
            });
    }
);

export default searchApiAction;

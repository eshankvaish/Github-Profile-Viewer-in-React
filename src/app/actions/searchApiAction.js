import axios from 'axios';

import searchAction from './searchAction';
import GITHUB_API_URL from '../../conf';

const searchApiAction = (username, history) => (
    (dispatch) => {
        const config = {
            method: 'get',
            url: `${GITHUB_API_URL}users/${username}`,
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

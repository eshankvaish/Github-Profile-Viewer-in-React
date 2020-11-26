import axios from 'axios';

import exploreAction from './exploreAction';
import GITHUB_API_URL from '../../conf';

const followAction = (username, authToken, handleDeleteUser) => (
    (dispatch) => {
        const config = {
            method: 'put',
            url: `${GITHUB_API_URL}user/following/${username}`,
            headers: {
                Authorization: `token ${authToken}`,
            },
        };

        axios(config)
            .then(() => {
                handleDeleteUser(username); // Delete that suggestion
            })
            .catch(() => {
                dispatch(exploreAction({
                    error: 'Error Following the user',
                }));
                setTimeout(() => {
                    dispatch(exploreAction({
                        error: '',
                    }), 5000); // Remove error after 5s
                });
            });
    }
);

export default followAction;

import axios from 'axios';

import exploreAction from './exploreAction';
import { FOLLOW_API } from '../../conf';

const followAction = (username, authToken, handleDeleteUser) => (
    (dispatch) => {
        const config = {
            method: 'put',
            url: `${FOLLOW_API(username)}`,
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

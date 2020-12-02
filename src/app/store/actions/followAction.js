import axios from 'axios';

import { exploreAction } from './exploreAction';
import { FOLLOW_API } from '../../../conf';

const followAction = (username, authToken, handleDeleteUser) => (
    (dispatch) => {
        axios(FOLLOW_API(username, authToken))
            .then(() => {
                // Delete that suggestion
                setTimeout(() => handleDeleteUser(username), 1500);
                dispatch(exploreAction({
                    success: `You are now following ${username}`,
                }));
                setTimeout(() => {
                    dispatch(exploreAction({
                        success: '',
                    }));
                }, 4000); // Remove success after 5s
            })
            .catch(() => {
                dispatch(exploreAction({
                    error: 'Error Following the user',
                }));
                setTimeout(() => {
                    dispatch(exploreAction({
                        error: '',
                    }));
                }, 5000); // Remove error after 5s
            });
    }
);

export default followAction;

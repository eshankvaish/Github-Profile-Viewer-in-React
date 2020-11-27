import axios from 'axios';

import { exploreAction } from './exploreAction';
import { FOLLOW_API } from '../../../conf';

const followAction = (username, authToken, handleDeleteUser) => (
    (dispatch) => {
        axios(FOLLOW_API(username, authToken))
            .then(() => {
                handleDeleteUser(username); // Delete that suggestion
                dispatch(exploreAction({
                    success: `You are now following ${username}`,
                }));
                setTimeout(() => {
                    dispatch(exploreAction({
                        success: '',
                    }));
                }, 5000); // Remove success after 5s
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

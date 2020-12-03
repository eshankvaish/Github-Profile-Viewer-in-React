import axios from 'axios';

import { exploreAction } from './exploreAction';
import { FOLLOW_API } from '../../../constants';
import apiConfig from '../../../service';

const followAction = (username, authToken, handleDeleteUser, t) => (
    (dispatch) => {
        axios(apiConfig('put', FOLLOW_API(username), {
            Authorization: `token ${authToken}`,
        }))
            .then(() => {
                // Delete that suggestion
                setTimeout(() => handleDeleteUser(username), 1500);
                dispatch(exploreAction({
                    success: `${t('You are now following')} ${username}`,
                }));
                setTimeout(() => {
                    dispatch(exploreAction({
                        success: '',
                    }));
                }, 4000); // Remove success after 5s
            })
            .catch(() => {
                dispatch(exploreAction({
                    error: t('Error Following the user'),
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

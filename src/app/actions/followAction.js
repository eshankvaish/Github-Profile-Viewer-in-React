import axios from 'axios';
import exploreAction from './exploreAction';

const followAction = (username, authToken, handleDeleteUser) => (
    (dispatch) => {
        const config = {
            method: 'put',
            url: `https://api.github.com/user/following/${username}`,
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

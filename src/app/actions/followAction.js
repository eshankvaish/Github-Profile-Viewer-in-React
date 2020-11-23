import axios from 'axios';
import exploreAction from './exploreAction';

const followAction = (username, auth_token, handleDeleteUser) => {
    return ((dispatch) => {
        let config = {
            method: 'put',
            url: `https://api.github.com/user/following/${username}`,
            headers: {
                'Authorization': `token ${auth_token}`
            }
        };

        axios(config)
            .then(() => {
                handleDeleteUser(username); //Delete that suggestion
            })
            .catch(() => {
                dispatch(exploreAction({
                    error: 'Error Following the user'
                }));
                setTimeout(() => {
                    dispatch(exploreAction({
                        error: ''
                    }), 5000); //Remove error after 5s
                });
            });
    });
};

export default followAction;

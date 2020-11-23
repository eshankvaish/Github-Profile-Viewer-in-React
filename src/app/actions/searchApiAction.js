import axios from 'axios';
import searchAction from './searchAction';

const searchApiAction = (username, history) => {
    return ((dispatch) => {
        let config = {
            method: 'get',
            url: 'https://api.github.com/users/' + username
        };
        axios(config)
            .then(() => {
                history.push(`/${username}`);
                dispatch(searchAction({
                    loading: false
                }));
            })
            .catch(() => {
                dispatch(searchAction({
                    error: 'No User Found with given Username',
                    loading: false
                }));
            });
    });
};

export default searchApiAction;

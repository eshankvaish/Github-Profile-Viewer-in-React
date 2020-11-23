import axios from 'axios';
import followersAction from './followersAction';
import followersErrorAction from './followersErrorAction';

const followersApiAction = (username) => {
    return ((dispatch) => {
        let config = {
            method: 'get',
            url: `https://api.github.com/users/${username}/followers`
        };
        axios(config)
            .then(({data}) => {
                dispatch(followersAction({
                    followersData: data
                }));
            })
            .catch(() => {
                dispatch(followersErrorAction());
            });
    });
};

export default followersApiAction;

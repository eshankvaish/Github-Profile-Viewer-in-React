import exploreAction from './exploreAction';
import axios from 'axios';

const exploreApiAction = (lastIndexId, presentUserData, size) => {
    return ((dispatch) => {
        let config = {
            method: 'get',
            url: `https://api.github.com/users?since=${lastIndexId}`
        };
        axios(config)
            .then(({data}) => {
                //update the state data
                dispatch(exploreAction({
                    userData: [
                        ...presentUserData,
                        ...data.slice(0,size)
                    ],
                    lastIndex: data[size-1].id,
                    error: ''
                }));
            })
            .catch(() => {
                dispatch(exploreAction({
                    error: 'Something Went Wrong'
                }));
            });
    });
};
export default exploreApiAction;

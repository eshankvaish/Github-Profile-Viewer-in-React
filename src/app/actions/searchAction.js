import { SEARCH } from './actionTypes';

const searchAction = (payload) => (
    {
        type: SEARCH,
        payload,
    }
);
export default searchAction;

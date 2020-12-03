import actionTypes from '../actionTypes';

const { SEARCH } = actionTypes;
const initialState = {
    username: '',
    error: '',
    loading: false,
    suggestions: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
    case SEARCH:
        return {
            ...state,
            ...action.payload,
        };
    default: return state;
    }
};
export default searchReducer;

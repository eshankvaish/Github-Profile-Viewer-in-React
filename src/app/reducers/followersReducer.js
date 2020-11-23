const initialState = {
    loading: true,
    followersData: [],
    error: ''
};

const followersReducer = (state=initialState, action) => {
    switch (action.type) {
    case 'FETCH_FOLLOWERS':
        return {
            ...state,
            loading: false,
            ...action.payload
        };
    case 'FOLLOWERS_ERROR':
        return {
            ...state,
            ...action.payload
        };
    default:
        return state;
    }
};

export default followersReducer;

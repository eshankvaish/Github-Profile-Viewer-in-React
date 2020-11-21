const initialState = {
    userData: [],
    lastIndex: 0,
    error: ''
};

const exploreReducer = (state=initialState, action) => {
    switch (action.type) {
    case 'UPDATE_STATE':
        return {
            ...state,
            ...action.payload
        };
    default: return state;
    }
};

export default exploreReducer;

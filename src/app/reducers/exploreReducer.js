const initialState = {
    userData: [],
    lastIndex: 0,
    error: '',
    loading: true
};

const exploreReducer = (state=initialState, action) => {
    switch (action.type) {
    case 'UPDATE_STATE':
        return {
            ...state,
            ...action.payload,
            loading: false
        };
    default: return state;
    }
};

export default exploreReducer;

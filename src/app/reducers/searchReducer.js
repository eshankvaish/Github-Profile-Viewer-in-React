const initialState = {
    username: '',
    error: '',
    loading: false
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SEARCH': 
        return {
            ...state,
            ...action.payload
        };
    default: return state;
    }
};
export default searchReducer;

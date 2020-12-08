import actionTypes from '../actionTypes';
import modifyLocalStorageItem from '../../utils/modifyLocalStorage';

const { LOGIN, LOGOUT } = actionTypes;

let userState = modifyLocalStorageItem('get', 'userState');
const initialState = {
    username: '',
    authToken: '',
    avatar: '',
    location: '',
    followingCount: null,
    followersCount: null,
    bio: '',
    profileLink: '',
    blog: '',
    email: '',
    isLoggedIn: false,
    error: '',
    loading: false,
};

if (!userState) {
    userState = initialState;
}

const loginReducer = (state = userState, action) => {
    let loginState;
    switch (action.type) {
    case LOGIN:
        loginState = {
            ...state,
            ...action.payload,
        };
        modifyLocalStorageItem('set', 'userState', loginState);
        return loginState;
    case LOGOUT:
        modifyLocalStorageItem('remove', 'userState');
        return initialState;
    default:
        return {
            ...state,
            error: '',
        };
    }
};
export default loginReducer;

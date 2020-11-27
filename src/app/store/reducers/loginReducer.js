import { LOGIN, LOGOUT } from '../actionTypes';
import modifyLocalStorageItem from '../../utils/modifyLocalStorage';

let userState = modifyLocalStorageItem('get', 'userState');
const initialState = {
    username: '',
    authToken: '',
    avatar: '',
    location: '',
    following_count: null,
    followers_count: null,
    bio: '',
    profile_link: '',
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

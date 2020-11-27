import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';
import exploreReducer from './exploreReducer';
import followersReducer from './followersReducer';

const allReducers = combineReducers({
    loginState: loginReducer,
    searchState: searchReducer,
    profileState: profileReducer,
    exploreState: exploreReducer,
    followersState: followersReducer,
});
export default allReducers;

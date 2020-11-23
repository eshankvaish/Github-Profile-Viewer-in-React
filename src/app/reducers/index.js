import loginReducer from './loginReducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';
import { combineReducers } from 'redux';
import exploreReducer from './exploreReducer';
import followersReducer from './followersReducer';

const allReducers = combineReducers({
    loginReducer,
    searchState: searchReducer,
    profileState: profileReducer,
    exploreState: exploreReducer,
    followersState: followersReducer
});
export default allReducers;

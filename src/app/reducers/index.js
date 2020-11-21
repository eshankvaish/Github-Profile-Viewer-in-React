import loginReducer from './loginReducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';
import { combineReducers } from 'redux';
import exploreReducer from './exploreReducer';

const allReducers = combineReducers({
    loginReducer,
    searchState: searchReducer,
    profileState: profileReducer,
    exploreState: exploreReducer
});
export default allReducers;

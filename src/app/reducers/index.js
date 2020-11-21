import loginReducer from './loginReducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loginReducer,
    searchState: searchReducer,
    profileState: profileReducer
});
export default allReducers;

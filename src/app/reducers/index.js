import loginReducer from './loginReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loginReducer,
    searchState: searchReducer
});
export default allReducers;

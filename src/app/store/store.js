import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import allReducers from './reducers';

const middleware = [thunk];
const enhancers = [
    applyMiddleware(...middleware),
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    /* eslint-enable */
];

const store = createStore(
    allReducers,
    compose(...enhancers),
);

export default store;

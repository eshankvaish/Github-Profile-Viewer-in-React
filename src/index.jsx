import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import i18n from './i18n';

import './styles/index.scss'; // Importing scss file
import App from './App';
import allReducers from './app/reducers';

(() => {
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

    ReactDOM.render(
        <React.StrictMode>
            <I18nextProvider i18n={i18n}>
                <Provider store={store}>
                    <App />
                </Provider>
            </I18nextProvider>
        </React.StrictMode>,
        document.getElementById('root'),
    );
})();

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'; //Importing scss file
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { createStore } from 'redux';
import allReducers from './app/reducers';
import {Provider} from 'react-redux';

(function() {
    const store = createStore(
        allReducers,
        /*Only for debugging, to be removed */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
    );
  
    ReactDOM.render(
        <React.StrictMode>
            <I18nextProvider i18n={i18n}>
                <Provider store={store}>
                    <App />
                </Provider>
            </I18nextProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
})();

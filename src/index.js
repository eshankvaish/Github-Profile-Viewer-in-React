import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'; //Importing scss file
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

(function() {
    ReactDOM.render(
        <React.StrictMode>
            {/* App wrapped inside I18 */}
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
})();

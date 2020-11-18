/*Main App*/
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './app/layouts/Navbar/Navbar';

function App() {
    const {i18n} = useTranslation();
    i18n.changeLanguage(navigator.language || navigator.userLanguage);

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
            </div>
        </BrowserRouter>
    );
}

export default App;

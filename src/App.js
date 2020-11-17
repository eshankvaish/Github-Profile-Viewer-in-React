/*Main App*/
import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './app/components/navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
    const {i18n} = useTranslation();  //t: for adding keys
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

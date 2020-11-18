/*Main App*/
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './app/components/navbar';
import Routes from './route';

function App() {
    const { i18n } = useTranslation();  //t: for adding keys
    i18n.changeLanguage(navigator.language || navigator.userLanguage);

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <main>
                    <Routes />
                </main>
            </div>
        </BrowserRouter>
    );
}
export default App;

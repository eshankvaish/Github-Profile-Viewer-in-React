/*Main App*/
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './app/layouts/Navbar/Navbar';
import Routes from './route';

function App() {
    const { i18n } = useTranslation();
    i18n.changeLanguage(navigator.language || navigator.userLanguage);
    const loginState = useSelector(state => state.loginReducer);
    
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <main>
                    <Routes loginState={loginState} />
                </main>
            </div>
        </BrowserRouter>
    );
}
export default App;

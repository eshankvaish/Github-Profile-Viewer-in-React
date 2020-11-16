import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'; //Importing scss file
import App from './App';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

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
  const menuIcon = document.querySelector('.nav__toggle--menu');
  const closeIcon = document.querySelector('.nav__toggle--close');
  const navList = document.querySelector('.nav__list');
  const toggleActiveClass = 'nav__toggle--active';


  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav__toggle--menu')) {
      menuIcon.classList.remove(toggleActiveClass);
      closeIcon.classList.add(toggleActiveClass);
      navList.classList.add(toggleActiveClass);
    } else if (e.target.classList.contains('nav__toggle--close')) {
      menuIcon.classList.add(toggleActiveClass);
      closeIcon.classList.remove(toggleActiveClass);
      navList.classList.remove(toggleActiveClass);
    }
  });
})();

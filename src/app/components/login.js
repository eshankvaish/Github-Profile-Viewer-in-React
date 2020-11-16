import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cleanData from '../utils/cleanData';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import login from '../actions/login';
import { useSelector } from 'react-redux';

const Login = (props) => {
    const { t } = useTranslation();
    const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);
    if (isLoggedIn) {
        props.history.push('/profile');
    }
    //local state for login data
    const [loginState, setloginState] = useState({
        username: '',
        auth_token: ''
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setloginState({
            ...loginState,
            [e.target.id]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault(); //Prevent Default Submit Action
        let formErrors = document.querySelector('.login__errors');
        formErrors.classList.add('d-none');
        //API data
        let apiData = {
            method: 'get',
            url: 'https://api.github.com/user',
            headers: {
                'Authorization': 'token ' + loginState.auth_token
            }
        };
        //API call
        axios(apiData)
            .then((response) => {
                let responseData = response.data;
                if (responseData.login === loginState.username) {
                    let loginData = {
                        ...loginState,
                        avatar: cleanData(responseData.avatar_url),
                        location: cleanData(responseData.location),
                        following_count: responseData.followers,
                        followers_count: responseData.following,
                        bio: cleanData(responseData.bio),
                        profile_link: responseData.html_url,
                        blog: cleanData(responseData.blog),
                        email: cleanData(responseData.email),
                        isLoggedIn: true
                    }
                    props.history.push('profile');
                    dispatch(login(loginData));
                } else {
                    formErrors.classList.remove('d-none');
                }
            })
            .catch((error) => {
                formErrors.classList.remove('d-none');
            });
    }

    return (
        <section className="login center-container">
            <h1 className="heading">{t("Login")}</h1>
            <div className="login__errors d-none">
                {t("Invalid Username / Token")}
            </div>
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__form--field">
                    <label htmlFor="login__form--username">{t("Username")}</label>
                    <input type="text" aria-label="Username" className="login__form--input" name="username" id="username" placeholder={t("Enter Username")} onChange={handleChange} required />
                </div>
                <div className="login__form--field">
                    <label htmlFor="auth_token">{t("Personal Access Token")}</label>
                    <input type="password" aria-label="Access Token" className="login__form--input" name="auth_token" placeholder={t("Enter Access Token")} id="auth_token" onChange={handleChange} required />
                </div>
                <div className="login__form--field">    
                    <button type="submit" aria-label="Login Button" className="login__form--submit">{t("Login")}</button>
                </div>
            </form>
        </section>
    );
}
export default Login;

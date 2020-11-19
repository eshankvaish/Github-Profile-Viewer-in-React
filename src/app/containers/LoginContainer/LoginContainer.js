import React, {useState} from 'react';
import cleanData from '../../utils/cleanData';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import login from '../../actions/login';
import Login from '../../components/Login/Login';

const LoginContainer = ({history, loginState}) => {
    const dispatch = useDispatch();
    const [errorState, setErrorState] = useState({
        error: ''
    });
    const [inputFieldState] = useState([
        {
            containerClassName: 'login__form--field',
            id: 'username',
            name: 'Username',
            label: 'Username',
            type: 'text',
            className: 'login__form--input',
            placeholder: 'Enter Username'
        },
        {
            containerClassName: 'login__form--field',
            id: 'auth_token',
            name: 'auth_token',
            label: 'Personal Access Token',
            type: 'password',
            className: 'login__form--input',
            placeholder: 'Enter Access Token'
        }
    ]);
    const [buttonState] = useState([
        {
            type: 'submit',
            label: 'Login',
            className: 'login__form--submit',
            containerClassName: 'login__form--field',
            id: 'login-button'
        }
    ]);
    if (loginState.isLoggedIn) {
        history.push('/profile');
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //Prevent Default Submit Action
        //API data
        let username = document.querySelector('#username').value,
            auth_token = document.querySelector('#auth_token').value;
        let apiData = {
            method: 'get',
            url: 'https://api.github.com/user',
            headers: {
                'Authorization': 'token ' + auth_token
            }
        };
        //API call
        axios(apiData)
            .then(({data}) => {
                if (data.login) {
                    let loginData = {
                        username: username,
                        auth_token: auth_token,
                        name: cleanData(data.name),
                        avatar: cleanData(data.avatar_url),
                        location: cleanData(data.location),
                        following_count: data.followers,
                        followers_count: data.following,
                        bio: cleanData(data.bio),
                        profile_link: data.html_url,
                        blog: cleanData(data.blog),
                        email: cleanData(data.email),
                        isLoggedIn: true
                    };
                    history.push('/profile');
                    dispatch(login(loginData));
                } else {
                    setErrorState({
                        error: 'Invalid Username / Token'
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                setErrorState({
                    error: 'Invalid Username / Token'
                });
            });
    };

    return (
        <Login inputFieldState={inputFieldState} buttonState={buttonState} handleSubmit={handleSubmit} error={errorState.error} />
    );
};
export default LoginContainer;

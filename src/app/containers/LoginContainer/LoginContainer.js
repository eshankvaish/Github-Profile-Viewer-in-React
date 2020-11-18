import React, {useState} from 'react';
import cleanData from '../../utils/cleanData';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import login from '../../actions/login';
import Login from '../../components/Login/Login';

const LoginContainer = ({history, loginState}) => {
    /*const handleChange = (e) => {
        console.log(e);
        dispatch(login({
            [e.target.id]: e.target.value
        }));
    };*/
    const [userCreds, setUserCreds] = useState({
        username: '',
        auth_token: ''
    });
    const handleChange = (e) => {
        setUserCreds({
            ...userCreds,
            [e.target.id]: e.target.value
        });
    };
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
            placeholder: 'Enter Username',
            onChange: handleChange
        },
        {
            containerClassName: 'login__form--field',
            id: 'auth_token',
            name: 'auth_token',
            label: 'Personal Access Token',
            type: 'password',
            className: 'login__form--input',
            placeholder: 'Enter Access Token',
            onChange: handleChange
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
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault(); //Prevent Default Submit Action
        //API data
        console.log(userCreds.auth_token);
        let apiData = {
            method: 'get',
            url: 'https://api.github.com/user',
            headers: {
                'Authorization': 'token ' + userCreds.auth_token
            }
        };
        //API call
        axios(apiData)
            .then(({data}) => {
                if (data.login === userCreds.username || data.login) {
                    let loginData = {
                        ...userCreds,
                        name: cleanData(data.name),
                        avatar: cleanData(data.avatar_url),
                        location: cleanData(data.location),
                        following_count: data.followers,
                        followers_count: data.following,
                        bio: cleanData(data.bio),
                        profile_link: data.html_url,
                        blog: cleanData(data.blog),
                        email: cleanData(data.email),
                        isLoggedIn: true,
                        error: ''
                    };
                    history.push('/profile');
                    dispatch(login(loginData));
                    console.log(loginData);
                } else {
                    console.log(data, userCreds);
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

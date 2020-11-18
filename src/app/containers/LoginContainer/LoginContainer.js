import React from 'react';
import cleanData from '../../utils/cleanData';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import login from '../../actions/login';
import { useSelector } from 'react-redux';
import Login from '../../components/Login/login';

const LoginContainer = ({history}) => {

    const loginState = useSelector(state => state.loginReducer);
    if (loginState.isLoggedIn) {
        history.push('/profile');
    }
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(login({
            [e.target.id]: e.target.value
        }));
    };
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
        let loginData;
        //API call
        axios(apiData)
            .then(({data}) => {
                if (data.login === loginState.username) {
                    loginData = {
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
                    history.push('profile');
                    
                } else {
                    loginData = {
                        error: 'Invalid Username / Token'
                    };
                }
            })
            .catch(() => {
                loginData = {
                    error: 'Invalid Username / Token'
                };
            });
        dispatch(login(loginData));
    };

    return (
        <Login handleChange={handleChange} handleSubmit={handleSubmit} loginState={loginState} />
    );
};
export default LoginContainer;

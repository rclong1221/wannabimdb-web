import React, {useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

import { API } from '../api-service';

import './auth.css';

function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginView, setLoginView] = useState(true);

    const [token, setToken] = useCookies(['TokenContext']);

    const isDisabled = username.length === 0 || password.length === 0;

    useEffect( () => {
        if (token['TokenContext']) window.location.href = '/movies';
    }, [token])

    const loginClicked = () => {
        API.loginUser({username, password})
            .then(response => setToken('TokenContext', response.token))
            .catch(error => console.log(error))
    }

    const registerClicked = () => {
        API.registerUser({username, password})
            .then(() => loginClicked())
            .catch(error => console.log(error))
    }

    return (
        <div className="App">
            <header className="App-header">
                { isLoginView ? <h1>Login</h1> : <h1>Register</h1> }
            </header>
            <div className="login-container">
                <label htmlFor="username">Title</label><br/>
                <input id="username" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></input><br/>
                <label htmlFor="password">Description</label><br/>
                <input id="password" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>
                { isLoginView ? <button onClick={loginClicked} disabled={isDisabled}>Log In</button> : <button onClick={registerClicked} disabled={isDisabled}>Register</button> }
                { isLoginView ? <p onClick={() => setLoginView(false) }>You don't have an account.  Register here!</p> : <p onClick={() => setLoginView(true) }>You already have an account.  Login here!</p> }
            </div>
        </div>
    )
}

export default Auth;
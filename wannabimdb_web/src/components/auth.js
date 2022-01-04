import React, {useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

import { API } from '../api-service';

function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [token, setToken] = useCookies(['TokenContext']);

    useEffect( () => {
        if (token['TokenContext']) window.location.href = '/movies';
    }, [token])

    const loginClicked = () => {
        API.loginUser({username, password})
            .then(response => setToken('TokenContext', response.token))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <label htmlFor="username">Title</label><br/>
            <input id="username" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></input><br/>
            <label htmlFor="password">Description</label><br/>
            <input id="password" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>
            <button onClick={loginClicked}>Log In</button>
        </div>
    )
}

export default Auth;
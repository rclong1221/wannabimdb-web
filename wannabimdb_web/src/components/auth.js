import React, {useState} from "react";

import { API } from '../api-service';

function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginClicked = () => {
        API.loginUser({username, password})
            .then(response => console.log(response))
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
export class API {
    static createMovie(body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['TokenContext']}`,
            },
            body: JSON.stringify(body),
        }).then( response => response.json() )
    }

    static readMovies(token) {
        return fetch("http://127.0.0.1:8000/api/movies/", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token['TokenContext']}`,
            }
        }).then( response => response.json() )
    }

    static updateMovie(movie, body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movie}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['TokenContext']}`,
            },
            body: JSON.stringify(body),
        }).then( response => response.json() )
    }

    static deleteMovie(movie, body, token) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movie}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['TokenContext']}`,
            },
            body: JSON.stringify(body),
        })
    }

    static loginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then( response => response.json() )
    }

    static registerUser(body) {
        return fetch(`http://127.0.0.1:8000/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then( response => response.json() )
    }
}
const TOKEN = "a8102ac3e946eaeb86246edbcefb97b285139561";

export class API {
    static updateMovie(movie, body) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movie}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`,
            },
            body: JSON.stringify(body),
        }).then( response => response.json() )
    }

    static createMovie(body) {
        return fetch(`http://127.0.0.1:8000/api/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`,
            },
            body: JSON.stringify(body),
        }).then( response => response.json() )
    }

    static deleteMovie(movie, body) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movie}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`,
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
}
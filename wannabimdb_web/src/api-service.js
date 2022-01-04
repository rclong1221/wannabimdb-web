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
        })
    }
}
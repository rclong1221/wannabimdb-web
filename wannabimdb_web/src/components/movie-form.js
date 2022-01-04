import React, { useState, useEffect } from 'react';
import { API } from '../api-service';

function MovieForm(props) {
    const movie = props.movie;

    const [ title, setTitle ] = useState(props.movie.title);
    const [ description, setDescription ] = useState(props.movie.description);

    useEffect( () => {
        setTitle(props.movie.title)
        setDescription(props.movie.description)
    }, [props.movie])

    const updateClicked = () => {
        API.updateMovie(
            props.movie.id, {title, description}
        ).then(response => props.updateMovie(response)
        ).catch(error => console.log(error));
    }

    const createClicked = () => {
        API.createMovie({title, description}
        ).then(response => props.movieCreated(response)
        ).catch(error => console.log(error));
    }

    return (
        <React.Fragment>
            { movie ? (
                <div>
                    <label htmlFor="title">Title</label><br/>
                    <input id="title" type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}></input><br/>
                    <label htmlFor="description">Description</label><br/>
                    <textarea id="description" type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br/>
                    { movie.id ? <button onClick={updateClicked}>Update</button> : <button onClick={createClicked}>Create</button>}
                </div>
            ) : null }
        </React.Fragment>
    )
}

export default MovieForm;
import React, { useState } from 'react';
import { API } from '../api-service';

function MovieForm(props) {
    const movie = props.movie;

    const [ title, setTitle ] = useState(props.movie.title);
    const [ description, setDescription ] = useState(props.movie.description);

    const updateClicked = () => {
        console.log("clicked");
        API.updateMovie(
            props.movie.id, {title, description}
        ).then(response => console.log(response)
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
                    <button onClick={updateClicked}>Update</button>
                </div>
            ) : null }
        </React.Fragment>
    )
}

export default MovieForm;
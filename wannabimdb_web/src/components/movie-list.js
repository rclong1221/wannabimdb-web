import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function MovieList(props) {
    const movieClicked = movie => e => {
        props.movieClickedHandler(movie);
    }

    const editClickedHandler = movie => e => {
        props.editClickedHandler(movie);
    }

    const deleteClickedHandler = movie => e => {
        props.deleteClickedHandler(movie);
    }

    return (
        <div>
            { props.movies && props.movies.map( movie => { 
                return (
                    <div key={movie.id}>
                        <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
                        <FontAwesomeIcon icon={faEdit} className={''} onClick={editClickedHandler(movie)} />
                        <FontAwesomeIcon icon={faTrash} className={''} onClick={deleteClickedHandler(movie)} />
                    </div>
                )
            })}
        </div>    
    )
}

export default MovieList;
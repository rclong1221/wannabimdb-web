import React from 'react';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { API } from '../api-service';

import './movie-list.css';

function MovieList(props) {
    const [token] = useCookies(['TokenContext']);

    const movieClicked = movie => e => {
        props.movieClickedHandler(movie);
    }

    const editClickedHandler = movie => e => {
        props.editClickedHandler(movie);
    }

    const deleteClickedHandler = movie => e => {
        API.deleteMovie(movie.id, token).then( () => props.deleteClickedHandler(movie) ).catch(error => console.log(error));
    }

    return (
        <div>
            { props.movies && props.movies.map( movie => { 
                return (
                    <div className={'movie-item'} key={movie.id}>
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
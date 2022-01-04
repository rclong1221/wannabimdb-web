import React from 'react';

function MovieForm(props) {
    const movie = props.movie;

    return (
        <React.Fragment>
            { movie ? (<h1>{ movie && movie.title } edit</h1>) : null }
        </React.Fragment>
    )
}

export default MovieForm;
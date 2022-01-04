import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './movie-details.css';

function MovieDetails(props) {
    const mov = props.movie;

    return (
        <div>
            { mov ? (
                <div>
                    <h1>{mov && mov.title}</h1>
                    <p>{mov && mov.description}</p>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 0 ? 'orange':''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 1 ? 'orange':''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 2 ? 'orange':''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 3 ? 'orange':''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 4 ? 'orange':''} />({mov.total_ratings})
                </div>
            ) : null}
        </div>    
    )
}

export default MovieDetails;
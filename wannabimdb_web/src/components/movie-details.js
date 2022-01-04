import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './movie-details.css';

function MovieDetails(props) {
    const [highlighted, setHighlighted] = useState(-1);

    const [token] = useCookies(['TokenContext']);

    const mov = props.movie;

    const highlightRate = high => e => {
        setHighlighted(high);
    }

    const onRateClickedHandler = i => e => {
        fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token['TokenContext']}`,
            },
            body: JSON.stringify( {stars: i + 1} )
          }).then( response => response.json() )
          .then( response => {
              getDetails() 
          })
          .catch( error => console.log(error) )
    }

    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token['TokenContext']}`,
            },
          }).then( response => response.json() )
          .then( response => props.updateMovie(response) )
          .catch( error => console.log(error) )
    }

    return (
        <React.Fragment>
            { mov ? (
                <div>
                    <h1>{mov && mov.title}</h1>
                    <p>{mov && mov.description}</p>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 0 ? 'orange':''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 1 ? 'orange':''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 2 ? 'orange':''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 3 ? 'orange':''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 4 ? 'orange':''} />({mov.total_ratings})
                    <div className="rate-container">
                        <h2>Rate it</h2>
                        { [...Array(5)].map( (e, i) => {
                            return <FontAwesomeIcon icon={faStar} key={i} className={highlighted > i - 1 ? 'purple':''} 
                                onMouseEnter={highlightRate(i)} onMouseLeave={highlightRate(-1)} onClick={onRateClickedHandler(i)} 
                            />
                        })}
                    </div>
                </div>
            ) : null}
        </React.Fragment>
         
    )
}

export default MovieDetails;
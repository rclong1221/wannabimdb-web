import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { faFilm, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.css';
import './components/movie-list';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  const [token, setToken, deleteToken] = useCookies(['TokenContext']);

  useEffect( () => {
    if (!token['TokenContext']) window.location.href = '/';
  }, [token])

  const movieClickedHandler = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const editClickedHandler = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  const deleteClickedHandler = movie => {
    const newMovies = movies.filter( mov => movie.id !== mov.id );
    setMovies(newMovies);
  }

  const updateMovie = movie => {
    const newMovies = movies.map( mov => {
      if (mov.id === movie.id) return movie;
      return mov;
    })
    setMovies(newMovies);
  }

  const createMovie = () => {
    setEditedMovie({title: '', description: ''});
    setSelectedMovie(null);
  }

  const movieCreated = movie => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token['TokenContext']}`,
      }
    }).then( response => response.json() )
    .then( response => setMovies(response) )
    .catch( error => console.log(error) )
  }, []);

  const logoutUser = () => {
    deleteToken(['TokenContext']);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faFilm} />
          <span>Movie Rater</span>

        </h1>
      <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser} />
      </header>
      <div className="layout">
        <div>
          <MovieList movies={movies} movieClickedHandler={movieClickedHandler} editClickedHandler={editClickedHandler} deleteClickedHandler={deleteClickedHandler} />
          <button onClick={createMovie}>Add movie</button>
        </div>
        <MovieDetails movie={selectedMovie} updateMovie={movieClickedHandler} />
        { editedMovie ? <MovieForm movie={editedMovie} updateMovie={updateMovie} movieCreated={movieCreated} /> : null }
      </div>
    </div>
  );
}

export default App;
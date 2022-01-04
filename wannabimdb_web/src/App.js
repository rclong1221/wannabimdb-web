import React, { useState, useEffect } from 'react';

import './App.css';
import './components/movie-list';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

function App() {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movieClickedHandler = movie => {
    setSelectedMovie(movie);
  }

  const updateMovie = movie => {
    setSelectedMovie(movie);
  }

  const editClickedHandler = movie => {
    console.log(`edit ${movie.title}`)
  }

  const deleteClickedHandler = movie => {
    console.log(`delete ${movie.title}`)
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token a8102ac3e946eaeb86246edbcefb97b285139561',
      }
    }).then( response => response.json() )
    .then( response => setMovie(response) )
    .catch( error => console.log(error) )
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <MovieList movies={movies} movieClickedHandler={movieClickedHandler} editClickedHandler={editClickedHandler} deleteClickedHandler={deleteClickedHandler} />
        <MovieDetails movie={selectedMovie} updateMovie={updateMovie} />
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';

import './App.css';
import './components/movie-list';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

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
        'Authorization': 'Token a8102ac3e946eaeb86246edbcefb97b285139561',
      }
    }).then( response => response.json() )
    .then( response => setMovies(response) )
    .catch( error => console.log(error) )
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
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
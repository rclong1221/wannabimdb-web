import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ',
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
          <div>
            { movies.map( movie => { return <h2>{movie}</h2>} )}</div>
          <div>Movie Details</div>
        </div>
    </div>
  );
}

export default App;
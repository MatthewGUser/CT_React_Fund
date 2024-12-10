import React, { useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', genre: 'Sci-Fi', details: 'A mind-bending thriller.' },
    { title: 'The Dark Knight', genre: 'Action', details: 'A superhero epic.' },
    { title: 'Finding Nemo', genre: 'Animation', details: 'A journey under the sea.' },
  ]);
  const [viewAll, setViewAll] = useState(true);

  const toggleDetails = (index) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie, i) =>
        i === index ? { ...movie, showDetails: !movie.showDetails } : movie
      )
    );
  };

  const removeMovie = (index) => {
    setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
  };

  const toggleView = () => {
    setViewAll(!viewAll);
  };

  return (
    <div>
      <button onClick={toggleView}>
        {viewAll ? 'Show Action Movies' : 'Show All Movies'}
      </button>
      <ul>
        {movies
          .filter((movie) => viewAll || movie.genre === 'Action')
          .map((movie, index) => (
            <li key={index}>
              <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                {movie.title}
              </span>
              {movie.showDetails && <p>{movie.details}</p>}
              <button onClick={() => removeMovie(index)}>Remove</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;

import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map((movie, i) => (
          <div key={i}>
            <h2>{movie.title}</h2>
            <h4>Length: {movie.time}</h4>
            <h4>Genres:
            <ul>{movie.genres.map((genre, i) => (
              <li key={i}>{genre}</li>
            ))}</ul></h4>
          </div>
        ))}
    </div>
  );
};

export default Movies;

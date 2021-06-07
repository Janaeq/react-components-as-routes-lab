import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director, i) => (
        <div key={i}>
          <h3>{director.name}</h3>
          <h5>Movies:</h5>
          <ul>{director.movies.map((movie, i) => (
            <li key={i}>{movie}</li>
          ))}</ul>
        </div>
      ))}
    </div>
  );
}

export default Directors

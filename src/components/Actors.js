import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, i) => (
        <div key={i}>
          <h3>{actor.name}</h3>
          <h4>Movies:</h4>
          <ul>{actor.movies.map((movie, i) => (
            <li key={i}>{movie}</li>
          ))}</ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;

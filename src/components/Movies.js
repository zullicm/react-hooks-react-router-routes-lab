import React from "react";
import { movies } from "../data";

function Movies() {
  return (<div>
    <h1>Movies Page</h1>
    {movies.map(movie => {
      return (
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <h5>{movie.time}</h5>
        <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
      </div>
      )})}
  </div>)
}


export default Movies;

import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props)
  super(props);
  this.state = {
  loading: true,
  movies: []
};

render() {
  return (
    { this.state.loading ? <div>Loading...</div> : null }
    < ul >
    {
      this.state.movies.map((movie, i) => <li key={i}>
        <img src={movie.Poster} /> <br />
        {movie.Year} <br />
        {movie.Title}
      </li>)
    }
  </ul >
  )
}
}

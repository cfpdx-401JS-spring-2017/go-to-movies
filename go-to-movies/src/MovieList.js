import React, { Component } from 'react';

class MovieList extends Component {

  render() {
    return (
      <div>
        {this.props.loading ? <div>Loading...</div> : null}
        < ul >
          {
            this.props.movies.map((movie, i) => <li key={i}>
              <img src={movie.Poster} alt='movie poster' /> <br />
              {movie.Year} <br />
              {movie.Title}
            </li>)
          }
        </ul >
      </div>
    )
  }
}

export default MovieList;

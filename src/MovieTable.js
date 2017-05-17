import React, { Component } from 'react';
import './App.css';

class MovieTable extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? <div>Loading...</div> : null}
        < table >
          <tbody>
            {this.props.movies.map((movie, i) => <tr key={i}>
              <td><img src={movie.Poster} alt="Poster" /></td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Actors}</td>
              <td>{movie.Plot}</td>
            </tr>)}
          </tbody>
        </table >
      </div>
    )
  }
}

export default MovieTable;
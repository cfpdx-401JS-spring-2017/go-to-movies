import React, { Component } from 'react';
import Search from './Search';
import './App.css';

class MovieApp extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: []
    };

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search('Indiana Jones')
  }

  search(title) {
    this.setState({
      loading: true,
      movies: []
    });
    fetch(`http://www.omdbapi.com/?s=${encodeURI(title)}&plot=short`)
      .then(res => res.json())
      .then(data => data.Search) //capital "Search" because that's on the API data type
      .then(movies => {
        const promises = movies.map(movie => {
          return fetch(`http://www.omdbapi.com/?t=${encodeURI(movie.Title)}&plot=short`)
            .then(response => {
              return response.json();
            })
        })
        return Promise.all(promises);
      })
      .then(movies => {
        this.setState({
          movies,
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>The Ripe Banana Movie Database</h2>
        </div>
        <h2>Search your favorite movies</h2>
        <div>
          <Search search={this.search} />
        </div>
        {this.state.loading ? <div>Loading...</div> : null}
        <table>
          <tbody>
            {this.state.movies.map((movie, i) => <tr key={i}>
              <td><img src={movie.Poster} alt="Poster" /></td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Actors}</td>
              <td>{movie.Plot}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieApp;

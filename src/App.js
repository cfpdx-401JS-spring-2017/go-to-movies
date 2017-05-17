import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MovieApp extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: []
    };
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
              console.log('Response: ', response);
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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Ripe Banana Movie Database</h2>
        </div>
        <h2>Search your favorite movies</h2>
        <div>
          <form onSubmit={event => {
            event.preventDefault();
            this.search(event.target.elements.search.value);

          }}>
            <label>Title: <input name="search" /></label>
            <button type="submit">Search</button>
          </form>
        </div>
        {this.state.loading ? <div>Loading...</div> : null}
        <ul>
          {this.state.movies.map((movie, i) => <li key={i}>
            <img src={movie.Poster} alt="Poster" />
            {movie.Title}
            {movie.Year}
            {movie.Actors}
            {movie.Plot}
          </li>)}
        </ul>
      </div>
    );
  }
}

export default MovieApp;

import React, { Component } from 'react';
import './App.css';

function Movie({ movie }) {
  return (
    <li>
      <h3>{ movie.Title }</h3>
      { movie.Year }
      <img src={ movie.Poster } 
           alt={ movie.Title } 
           onClick={ e => console.log('clicked!') }
      />
    </li>
  );
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: []
    };
  }

  componentDidMount() {
    this.populateMovies();
  }

  populateMovies(movie = 'dune') {
    fetch(`http://www.omdbapi.com/?s=${encodeURI(movie)}&plot=short&r=json`)
      .then(res => res.json())
      .then(data => data.Search)
      .then(movies => this.setState({ movies, loading: false }));
  }

  render() {
    return (
      <div id="App">
        <h1 className="App-header">List of Attempts to Cinematize Dune</h1>
        
        <form onSubmit={ e => {
          e.preventDefault();
          this.populateMovies(e.target.elements.search.value);
        }}>
          <label>See attempts for a different movie:
            <input name="search" />
          </label>
          <button type="submit">Search</button>
        </form>

        <ul>
          { this.state.loading ? <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" /> : null }
          { this.state.movies.map((movie, idx) => <Movie key={ idx } movie={ movie } /> )}
        </ul>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchForm from './SearchForm';


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
    this.search('Moulin Rouge');
  }

  search(title) {
    fetch(`http://www.omdbapi.com/?s=${encodeURI(title)}&plot=short&r=json`)
      .then(res => res.json())
      .then(data => data.Search)
      .then(movies => {
        console.log(movies);
        this.setState({
          movies: movies,
          loading: false
        });
      });
  }


  render() {
    return (
      <div>
        <h2>Mofo's Movies</h2>
        <SearchForm search={this.search}/> 
        <MovieList 
          loading={this.state.loading} 
          movies={this.state.movies}
        />
      </div>
    );
  }
}
export default MovieApp;

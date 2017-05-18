import React, { Component } from 'react';
import MovieList from './MovieList';


class MovieApp extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: []
    };
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
      </div>
    );
  }
}
export default MovieApp;

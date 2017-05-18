import React, { Component } from 'react';
import './App.css';
import  SearchResults from './SearchResults'
import UserSearch from './UserSearch'

class MovieApp extends Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            movies: []
        };

        this.search = this.search.bind(this); 
    }

    search(title) {
        this.setState({
            loading: true,
            movies: []
        });
        fetch(`http://www.omdbapi.com/?s=${encodeURI(title)}&plot=short&r=json`)
            .then(res => res.json()) 
            .then(data => data.Search)
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
            <SearchResults 
                loading={this.state.loading} 
                movies={this.state.movies}
            />
             <UserSearch
                search={this.search}
             /> 
            </div>
        );

    }

}


export default MovieApp;

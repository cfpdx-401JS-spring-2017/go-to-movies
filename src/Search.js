import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={event => {
          event.preventDefault();
          console.log(this);
          this.props.search(event.target.elements.search.value);
        }}>
          <label>Title: <input name="search" /></label>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
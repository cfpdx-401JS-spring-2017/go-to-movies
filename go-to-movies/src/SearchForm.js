import React, { Component } from 'react';

class SearchForm extends Component {
  constructor {
    super() {
      this.state = {
      }
    }
render() {
  return (
  <div>
    <form onSubmit={event => {
      event.preventDefault();
      this.search(event.target.elements.search.value);
    }}>
      <label>Search: <input name="search" /></label>
      <button type="submit">Search</button>
    </form>
  </div>
  );
}
}


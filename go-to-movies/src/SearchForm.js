import React, { Component } from 'react';

class SearchForm extends Component {
  
render() {
  return (
  <div>
    <form onSubmit={event => {
      event.preventDefault();
      this.props.search(event.target.elements.search.value);
    }}>
      <label>Search: <input name="search" /></label>
      <button type="submit">Search</button>
    </form>
  </div>
  );
}
}

export default SearchForm;


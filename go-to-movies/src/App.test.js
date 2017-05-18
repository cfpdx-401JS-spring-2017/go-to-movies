import React from 'react';
import ReactDOM from 'react-dom';
import MovieApp from './MovieApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieApp />, div);
});

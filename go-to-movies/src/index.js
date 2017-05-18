import React from 'react';
import ReactDOM from 'react-dom';
import MovieApp from './MovieApp';
import HeaderConponent from './HeaderConponent';
import './index.css';

ReactDOM.render(
  <MovieApp />,
  document.getElementById('root')
);

ReactDOM.render(
  <HeaderConponent />,
  document.getElementById('header')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchContext from './context/searchContext';
ReactDOM.render(
  <React.StrictMode>
   <SearchContext >
      <App/>
      </SearchContext>
  </React.StrictMode>,
  document.getElementById('root')
);

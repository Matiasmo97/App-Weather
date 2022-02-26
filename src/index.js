import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  // Envolvemos nuestra app con BrowserRouter para luego poder usar Route(react-router-dom)
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);

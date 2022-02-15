import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import ToDoListContainer from './components/ToDoListContainer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <ToDoListContainer path="/react-to-do/" />
        <About path="/react-to-do/about" />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

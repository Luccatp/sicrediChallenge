import React from 'react';
import './index.css';
import { Routes } from './Routes/Routes';
import reportWebVitals from './reportWebVitals';
import { DragonsProvider } from './Contexts/DragonsContext';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <DragonsProvider>
      <Routes/>
    </DragonsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

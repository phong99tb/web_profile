import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './router/router'
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

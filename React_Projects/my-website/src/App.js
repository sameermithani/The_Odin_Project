import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import More from './components/More';

const dotenv = require('dotenv').config()

function App() {

  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/more' exact component={More} />
    </BrowserRouter>
  );
  
}

export default App;

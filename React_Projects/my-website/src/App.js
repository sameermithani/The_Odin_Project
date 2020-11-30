import './App.css';
import React from "react";
import NavBar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather';
import News from './components/news';
import Side from './components/side';

const dotenv = require('dotenv').config()

function App() {

  return (
    <div id="main">
      <NavBar/>
      <div className='main-center'>
        <div className='side-comp'>
          <Side />
        </div>
        <div className='news-comp'>
          <News />
        </div>
        <div className='weather-comp'>
          <h1 style={{fontFamily: 'cursive'}}>Weather</h1>
          <Weather />
        </div>
      </div>
      <footer>
        <p style={{marginTop: 'auto', verticalAlign: 'text-bottom'}}>Created by Sameer Mithani</p>
      </footer>
    </div>
  );
  
}

export default App;

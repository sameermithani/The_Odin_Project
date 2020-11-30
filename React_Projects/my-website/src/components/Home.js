import React from "react";
import NavBar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './weather';
import News from './news';
import Side from './side';


function Home (props) {
    return (
        <div id="home-main">
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

export default Home;
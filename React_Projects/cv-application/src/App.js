import React, { Component } from "react"
import ReactDOM from 'react-dom';
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";
import Skills from "./components/Skills";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonsDisplay: 'block',
    }
  }

  showOrHide = (e) => {
    this.state = {
      buttonsDisplay: (this.state.buttonsDisplay == 'block') ? 'none' : 'block',
    }
    let mainNode = ReactDOM.findDOMNode(this)
    let newDisplay = 'display: ' + this.state.buttonsDisplay;
    let buttonsList = mainNode.getElementsByClassName('buttons');
    for(let i=0; i<buttonsList.length; i++) {
      buttonsList[i].style.display = this.state.buttonsDisplay;
    }

    if(this.state.buttonsDisplay == 'none') {
      mainNode.getElementsByClassName('show-hide-button')[0].textContent = 'Show Buttons';
    } else {
      mainNode.getElementsByClassName('show-hide-button')[0].textContent = 'Hide Buttons';
    }

  }

  render() {
    return (
      <div id="root">
        <h1 id="header">CV Builder</h1>
        <div id="main">
          <General />
          <h3>Education</h3>
          <hr className='h-line'></hr>
          <Education />
          <h3>Experience</h3>
          <hr className='h-line'></hr>
          <Experience />
          <h3>Skills</h3>
          <hr className='h-line'></hr>
          <Skills />
          <button id="show-hide-button" className='show-hide-button' onClick={this.showOrHide}>Hide Buttons</button>
        </div>
      </div>
    );
  }
  
}

export default App;
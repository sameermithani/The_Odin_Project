import React from "react";
import NavBar from "./navbar";


function More (props) {
    return (
        <div className="more-main">
          <NavBar />
          <div>
              Coming Soon!
          </div>
          <footer>
            <p style={{marginTop: 'auto', verticalAlign: 'text-bottom'}}>Created by Sameer Mithani</p>
          </footer>
        </div>
      );    
}

export default More;
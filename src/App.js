import React, { Component } from 'react';
import trampoline from "./images/trampoline.gif";
import llamito from "./images/llamito3.gif";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">Llamito</div>
        <div className="imgBox">
          <img alt="trampoline" src={trampoline} id="trampoline"/>
        </div>
        <div className="llamaBox">
          <img alt="Llamito" src={llamito} id="llamito"/>
        </div>
      </div>
    );
  }
}

export default App;

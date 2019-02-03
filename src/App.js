import React, { Component } from 'react';
import trampoline from "./images/trampoline.gif";
import llamito from "./images/llamito3.gif";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bounce: false,
      bounceCount: 0
    }
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
  }
  
  mouseDown(e){
    e.preventDefault();
    this.setState({bounce: !this.state.bounce, bounceCount: this.state.bounceCount+1})
    e.target.classList.add('animated', 'bounce')
    console.log("mouseDown",e.target.classList)
    console.log(this.state.bounceCount)
  }

  mouseUp(e){
    e.preventDefault();
    e.target.classList.remove('animated', 'bounce');
    console.log("mouseUp",e.target.classList)
  }

  render() {
    return (
      <div className="App">
        <div className="header">Llamito</div>
        <div id="animationContainer">
          <img alt="trampoline" src={trampoline} id="trampoline"/>
          <img alt="Llamito" src={llamito} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} className="llamito"/>
        </div>
      </div>
    );
  }
}

export default App;

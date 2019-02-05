import React, { Component } from 'react';
import trampoline from "./images/trampoline.gif";
import llamito from "./images/llamito3.gif";
import badgalriri from "./audio/06BirthdayCake.m4a"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bounce: false,
      bounceCount: 0,
      audio: ""
    }
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.playRiRi = this.playRiRi.bind(this);
    this.audio = React.createRef();
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

  playRiRi(e){
    e.preventDefault();
    this.setState({audio: this.audio.current})
    // let currentTime = this.state.audio.currentTime;
    // currentTime = 12;
    // console.log(currentTime)
    const audio = document.querySelector("audio");
    // audio.currentTime = 12;
    console.log(audio.currentTime)
    audio.addEventListener(e.type, {once: true})
    audio.play();
  }

  render() {
    return (
      <div className="App">
        <div className="header">Llamito</div>
        <div id="animationContainer">
          <img alt="trampoline" src={trampoline} id="trampoline"/>
          <img alt="Llamito" src={llamito} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onClick={this.playRiRi} className="llamito"/>
        </div>
        <audio src={badgalriri} ref={this.audio}></audio>
      </div>
    );
  }
}

export default App;

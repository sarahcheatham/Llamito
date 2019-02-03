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
      playing: false
    }
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.playRiRi = this.playRiRi.bind(this);
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
    if(this.state.bounceCount >= 1){
      e.target.classList.add('playing');
      const audio = document.querySelector("audio");
      audio.currentTime = 12;
      if(e.target.classList.contains('playing')){
        audio.play();
      }else {
        audio.pause();
      }
    }
  }
  // function playSound(e) {
  //   var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   var key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  //   if (!audio) return; //stop the function from running if no audio
  //   audio.currentTime = 0; //rewind to the start
  //   audio.play();
  //   key.classList.add('playing');
  //   //adds the class playing from the css to the key when that key is pressed giving the animation
  // }
  render() {
    return (
      <div className="App">
        <div className="header">Llamito</div>
        <div id="animationContainer">
          <img alt="trampoline" src={trampoline} id="trampoline"/>
          <img alt="Llamito" src={llamito} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onClick={this.playRiRi} className="llamito"/>
        </div>
        <audio src={badgalriri}></audio>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import trampoline from "./images/trampoline.gif";
import llamito from "./images/llamito3.gif";
import cake from "./images/cake.gif";
import badgalriri from "./audio/06BirthdayCake.m4a"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bounce: false,
      bounceCount: 0,
      audio: "",
      cake: "",
      visibility: false
    }
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.playRiRi = this.playRiRi.bind(this);
    this.audio = React.createRef();
    this.cake = React.createRef();
    // this.handleHover = this.handleHover.bind(this);
  }
  
  mouseDown(e){
    e.preventDefault();
    this.setState({bounce: !this.state.bounce, bounceCount: this.state.bounceCount+1})
    e.target.classList.add('animated', 'bounce')
    const progress = document.getElementById("progress");
    let height = this.state.bounceCount;
    progress.style.height = height + '%'; 
  }

  mouseUp(e){
    e.preventDefault();
    e.target.classList.remove('animated', 'bounce');
  }

  playRiRi(e){
    e.preventDefault();
    this.setState({audio: this.audio.current})
    const audio = document.querySelector("audio");
    audio.addEventListener(e.type, {once: true})
    audio.play();
  }

  // handleHover(e){
  //   e.preventDefault();
  //   this.setState({cake: this.cake.current, visibility: !this.state.visibility});
  //   if(this.state.visibility === true){
  //     console.log('show')
  //   } else{
  //     console.log('hide')
  //   }
  // }

  render() {
    
    return (
      <div className="App">
        <div className="header">Llamito</div>
        <div id="animationContainer" onMouseOver={this.handleHover}>
          <img alt="trampoline" src={trampoline} id="trampoline"/>
          <img alt="Llamito" src={llamito} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onClick={this.playRiRi} className="llamito"/>
          <img alt="cake" src={cake} id="cake" ref={this.cake}/>
        </div>
        <div className="wrapper">
          <div id="progress"></div>
        </div>
        <audio src={badgalriri} ref={this.audio}></audio>
      </div>
    );
  }
}

export default App;

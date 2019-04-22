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
      hover: false
    }
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.playRiRi = this.playRiRi.bind(this);
    this.audio = React.createRef();
    this.cake = React.createRef();
    this.animation = React.createRef();
    this.onHover = this.onHover.bind(this);
    this.offHover = this.offHover.bind(this);
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
    const audio = this.audio.current;
    audio.addEventListener(e.type, {once: true})
    audio.play();
  }

  onHover(e){
    this.setState({hover: false})
    const animation = this.animation.current;
    console.log("animation", animation)
    console.log("hover:", this.state.hover)
  }

  offHover(e){
    this.setState({hover: true})
    console.log("hover:", this.state.hover)
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
        <div id="animationContainer" onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
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

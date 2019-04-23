import React, { Component } from 'react';
import trampoline from "../images/trampoline.gif";
import llamito from "../images/llamito3.gif";
import cake from "../images/cake.gif";
import badgalriri from "../audio/06BirthdayCake.m4a";
import '../App.css';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      bounce: false,
      bounceCount: 1,
      hover: false
    }
    this.audio = React.createRef();
    this.progress = React.createRef();
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.playRiRi = this.playRiRi.bind(this);
    this.onHover = this.onHover.bind(this);
    this.offHover = this.offHover.bind(this);
  }

  mouseDown(e){
    e.preventDefault();
    this.setState({bounce: !this.state.bounce, bounceCount: this.state.bounceCount+1})
    e.target.classList.add('animated', 'bounce')
    const progress = this.progress.current;
    let height = this.state.bounceCount;
    progress.style.height = height + '%'; 
    this.props.onCounterUpdate(height);  
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
    this.setState({hover: true})
    e.target.classList.add('hoverOn');
    e.target.classList.remove('hoverOff');
  }

  offHover(e){
    this.setState({hover: false})
    e.target.classList.add('hoverOff');
    e.target.classList.remove('hoverOn');
  }

  render() {
    return (
      <div className="App">
        <div className="header">Llamito</div>
        <div id="animationContainer" onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
          <img alt="trampoline" src={trampoline} id="trampoline"/>
          <img alt="Llamito" src={llamito} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onMouseEnter={this.onHover} onMouseLeave={this.offHover} onClick={this.playRiRi} className="llamito"/>
        </div>
        <div className="wrapper">
          <div id="progress" ref={this.progress}></div>
        </div>
        <div className="counter">
          <img src={cake} alt="cake" id="cake"/>
          <div>Cakes: {this.state.bounceCount-1}</div>
        </div>
        <audio src={badgalriri} ref={this.audio}></audio>
      </div>
    );
  }
}

export default Game;

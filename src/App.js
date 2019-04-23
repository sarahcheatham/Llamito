import React, { Component } from 'react';
import Game from './components/Game';
import PukeVideo from './components/PukeVideo';
import trampoline from "./images/trampoline.gif";
import llamito from "./images/llamito3.gif";
import cake from "./images/cake.gif";
import badgalriri from "./audio/06BirthdayCake.m4a";
import vomito from "./video/sick.mov";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bounceCount: 0,
    }
  }
  handleCounter = (counter) =>{
    this.setState({bounceCount: counter})
  }
  render(){
    console.log("bounceCount:", this.state.bounceCount)
    let whatToShow = "";
    if(this.state.bounceCount === 100){
      whatToShow = <PukeVideo/>
    } else {
      whatToShow = <Game onCounterUpdate={this.handleCounter}/>
    }
    return(
      <div className="App">
        {whatToShow}
      </div>
    )
  }
}

export default App;

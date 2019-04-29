import React, { Component } from 'react';
import vomito from "../video/sick3.m4v";
import '../App.css';

class PukeVideo extends Component{
    constructor(props){
        super(props);
        this.video = React.createRef();
        this.playVideo = this.playVideo.bind(this);
    }
    playVideo(){
        const pauseTime = 10;
        const video = this.video.current;
        console.log(video.currentTime)
        if (video.currentTime === pauseTime) {
            video.pause();
        }
        video.play();   
    }
    render(){
        return(
            <div>
                <video ref={this.video} id="pukeVideo" width="640" height="480" onClick={this.playVideo}>
                    <source src={vomito}/>
                </video>
            </div>
        )
    }
}
export default PukeVideo;
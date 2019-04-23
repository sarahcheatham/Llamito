import React, { Component } from 'react';
import vomito from "../video/sick3.m4v";
import '../App.css';

class PukeVideo extends Component{
    render(){
        return(
            <div>
                <video id="pukeVideo" width="640" height="480" controls>
                    <source src={vomito}/>
                </video>
            </div>
        )
    }
}
export default PukeVideo;
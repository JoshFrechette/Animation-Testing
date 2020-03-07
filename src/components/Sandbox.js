import React, { Component } from 'react';
import Animation from '../components/animation.js';
import "../styles/Sandbox.css";
//Try putting the basic html parts here, and the <Animation part will bring in that javascript-ish code. Might need some compliance to JSX
class Sandbox extends Component {
    render(){
    return (
        <div className="sandbox">
            <Animation />
        </div>
    );
    }
}

export default Sandbox;
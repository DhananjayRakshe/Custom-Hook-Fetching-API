import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Reactportal extends Component {
    render() {
        return  ReactDOM.createPortal(
            
                <h1>React Portal Component from another DOM</h1>,
                document.getElementById("root1")
            
        );
    }
}

export default Reactportal;

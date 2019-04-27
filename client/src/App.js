import React, { Component } from 'react';
import './App.css';
import { withRouter } from "react-router-dom"

class App extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <h1>Welcome Page</h1>
        <button onClick={() => this.nextPath('/home')} >
          Login
                </button>
      </div>
    )
  }
}

export default withRouter(App);

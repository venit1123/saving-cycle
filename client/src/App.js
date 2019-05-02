import React, { Component } from 'react';
import './App.css';
import { withRouter } from "react-router-dom"
import Welcome from './Welcome'


class App extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Welcome/>
      </div>
    )
  }
}

export default withRouter(App);

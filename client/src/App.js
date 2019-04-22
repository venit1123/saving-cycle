import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  };

  componentDidMount() {

    fetch('/home')
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          })
        }).catch(
          (error) => {
            this.setState({
              isLoaded: true,
              error: "Error: Unable to connect to DB"
            })
            console.log(error)
          }
        );
  }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(items);
      return (
        <ul>
          {items.map(item => (
            <li key={item.firstname}>
              {item.firstname}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;

import React, { Component } from 'react';
import Title from './Title';
import TandaForm from './TandaForm'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      tandas: []
    };
  };

  componentDidMount() {
    fetch('/tanda')
    .then((res) => {
      return res.json();
    })
    .then(
      (result) => {
        this.setState({
        isLoaded: true,
        tandas: result
      })
    }).catch(
      (error) => {
        this.setState({
          isLoaded: true,
          error: "Error: Unable to connect to DB"
        })
      console.log(error)
    });
   }
 
  handleCreateNewTanda = (moneyAmount, timeGap, startDay, slots) => {
    // console.log(`HELLO FROM APP THIS IS WHAT I GOT: 
    // Money Amount: ${ moneyAmount } \n
    // Time Gap: ${ timeGap } \n
    // Start Day: ${ startDay } \n
    // Slots: ${ slots }`);

    let endDay = new Date();
    endDay.setDate(startDay.getDate() + timeGap * (slots - 1) );

    startDay = startDay.toLocaleDateString();
    endDay = endDay.toLocaleDateString();

    // console.log(`Start date : ${startDay}`);
    // console.log(`End date : ${endDay}`);

    const body = {
      moneyAmount,
      timeGap,
      startDay,
      endDay,
      slots,
      available_slots: 1,
      tanda_type_id: 2
    }

    console.log("DATA BEFORE FETCHING" ,body);

    fetch(`/tanda`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
      if (res.status === 400) {
        alert("Unable to create new tanda: All fields are required");
      } else {
        return res.json();
      }
    }).then((json) => {
      this.setState({
        tandas: [
          ...this.state.tandas, json
        ]
      })
      console.log("This is the JSON from app: " , this.state.tandas);
    }).catch((error) => {
      alert(error, "Unable to add apprentice");
    });

  }

  render() {
    const { error, isLoaded, tandas } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      //console.log(tandas);
      return (
        <div>
        {/* <ul>
          {tandas.map(tanda => (
            <li key={tanda.id}>
              {tanda.id}
            </li>
          ))}
        </ul> */}
          <Title name='Tanda' />
          <TandaForm createTanda={this.handleCreateNewTanda} />
        </div>
      );
    }
  }
}

export default App;

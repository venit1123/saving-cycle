import React, { Component } from 'react';
import Title from './Title';
import TandaForm from './TandaForm'
import './App.css';
import { withRouter } from "react-router-dom"

class App extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      tandas: [],
      receivingDays: null
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
    //console.log("HI FROM HANDLE TANDA");
    // this.props.history.push({
    //   pathname: '/table',
    //   state: { detail: "ANDY" }
    // })

    //return


    let endDay = new Date();
    endDay.setDate(startDay.getDate() + timeGap * (slots - 1) );

    let startDayFormated = startDay.toLocaleDateString();
    let endDayFormated = endDay.toLocaleDateString();

    console.log(`Start date: ${startDay} and End date: ${endDay}`);

    const body = {
      moneyAmount,
      timeGap,
      startDay: startDayFormated,
      endDay: endDayFormated,
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
    }).then(
      this.createTandaSpreadSheet(startDay, timeGap, slots)
    ).catch((error) => {
      alert(error, "Unable to add apprentice");
    });

  }

  createTandaSpreadSheet = (startDay, timeGap, slots) => {
    console.log("HELLO FROM CREATE TANDA SPREADSHEET!")
    let newDate = startDay;
    let days = [] 

    days.push(new Date(newDate).toLocaleDateString());

    while(slots > 1){
      newDate.setDate(newDate.getDate() + timeGap)
      days.push(new Date(newDate).toLocaleDateString());
      slots --;
    }

    this.props.history.push({
      pathname: '/table',
      state: { days: days }
    })
    // this.setState({
    //   receivingDays: days
    // })

  }
  render() {
    console.log("DAYS ARRAY: " , this.state.receivingDays)

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
          <TandaForm 
            createTanda={this.handleCreateNewTanda}
            receivingDays={this.setState.receivingDays}
           />
        </div>
      );
    }
  }
}

export default withRouter(App);

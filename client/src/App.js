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
      receivingDays: null,
      tandaId: null,
      newTandaInfo: null
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

    let endDay = new Date();
    endDay.setDate(startDay.getDate() + timeGap * (slots - 1) );

    let startDayFormated = startDay.toLocaleDateString();
    let endDayFormated = endDay.toLocaleDateString();

//    console.log(`Start date: ${startDay} and End date: ${endDay}`);

    const body = {
      moneyAmount,
      timeGap,
      startDay: startDayFormated,
      endDay: endDayFormated,
      slots,
      available_slots: 1,
      tanda_type_id: 2
    }
    //console.log("DATA BEFORE FETCHING" ,body);

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
        tandas: json,
      })
    }).then( () => {
      this.createTandaSpreadSheet(this.state.tandas.id, startDay, timeGap, slots) 
    }).catch((error) => {
      alert(error, "Unable to add apprentice");
    });

  }

  createTandaSpreadSheet = (tandaId, startDay, timeGap, slots) => {

    let newDate = startDay;
    let days = [] 

    days.push(new Date(newDate).toLocaleDateString());

    while(slots > 1){
      newDate.setDate(newDate.getDate() + timeGap)
      days.push(new Date(newDate).toLocaleDateString());
      slots --;
    }

    const body = {
      days,
      tandaId,
      user_id: null
    }

    fetch(`/tanda/receiving_days`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
      if (res.status === 400) {
        alert("Unable to add dates to database:");
      } else {
        return res.json();
      }
    }).then((result) => {
      console.log(result)
      this.setState({
        newTandaInfo: result,
      })
    })
    .catch((error) => {
      alert(error, "Unable to add apprentice");
    });

    // this.props.history.push({
    //                     pathname: '/table',
    //                     state: { detail: "Itzel" }
    //                 })

  }
  render() {
    //console.log("DAYS ARRAY: " , this.state.receivingDays)

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

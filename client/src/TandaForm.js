import React, { Component } from 'react';
import MoneyAmountForm from './MoneyAmountForm';
import TimeGapForm from './TimeGapForm';
import StartDayForm from './StartDateForm';
import SlotsForm from './SlotsForm'
import './App.css';

class TandaForm extends Component {

    constructor() {
        super();
        this.state = {
           moneyAmount: null,
           timeGap: null, // in days
           startDay: null,
           slots: null
        };
    };

    handleMoneyAmount = (moneyAmount) => {
        //console.log(`HELLO FROM THE APP, $ SELECTED ${moneyAmount}`)
        this.setState({ moneyAmount })
    }

    handleTimeGap = (timeGap) => {
        //console.log(`HELLO FROM THE APP, TIME GAP SELECTED ${timeGap} days`)
        this.setState({ timeGap })
    }
    
    handleStartDay = (startDay) => {
//        console.log(`HELLO FROM THE APP, DAY SELECTED ${startDay.toLocaleDateString()}`);
        this.setState({ startDay: startDay})
    }

    handleSlots = (slots) => {
        //console.log(`HELLO FROM THE APP, SLOTS SELECTED  ${slots}`);
        this.setState({ slots })
    }

    handleSubmit = () => {
        // console.log(`Submit pressed: \n 
        // Money Amount: ${this.state.moneyAmount} \n
        // Time Gap: ${this.state.timeGap} \n 
        // Start Day: ${this.state.startDay} \n 
        // Slots: ${this.state.slots}`);

        this.props.createTanda(
            this.state.moneyAmount, 
            this.state.timeGap, 
            this.state.startDay, 
            this.state.slots
        );
    }

    render(){
        return(
            <div>
                <MoneyAmountForm getAmount = {this.handleMoneyAmount} />
                <br></br>
                <TimeGapForm getTimeGap = {this.handleTimeGap} />
                <br></br>
                <StartDayForm getStartDay={this.handleStartDay} />
                <br></br>
                <SlotsForm getSlots={this.handleSlots} />
                <br></br>
                <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} />
            </div>
        );
    }
}

export default TandaForm;
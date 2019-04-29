import React, { Component } from 'react';
import MoneyAmountForm from './MoneyAmountForm';
import TimeGapForm from './TimeGapForm';
import StartDayForm from './StartDateForm';
import SlotsForm from './SlotsForm'
import './App.css';
import './Form.css'
import { withRouter } from "react-router-dom"
import Title from './Title';

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
        console.log(moneyAmount);
        this.setState({ moneyAmount })
    }

    handleTimeGap = (timeGap) => {
        this.setState({ timeGap })
    }
    
    handleStartDay = (startDay) => {
        this.setState({ startDay: startDay})
    }

    handleSlots = (slots) => {
        this.setState({ slots })
    }

    handleSubmit = () => {
        this.props.createTanda(
            this.state.moneyAmount, 
            this.state.timeGap, 
            this.state.startDay, 
            this.state.slots
        );
    }
    
    render(){
        return(
            <div className='body min-padding'>
                <div className='title'>
                    <Title name="Create a new Tanda:"/>
                </div>
                <div className='form'>
                    <MoneyAmountForm getAmount = {this.handleMoneyAmount} />
                    <br></br>
                    <TimeGapForm getTimeGap = {this.handleTimeGap} />
                    <br></br>
                    <StartDayForm getStartDay={this.handleStartDay} />
                    <br></br>
                    <SlotsForm getSlots={this.handleSlots} />
                    <br></br>
                    <div className='form'>
                        <input className='btn rounded-pill outline-button' type="submit" value="Submit" onClick={() => 
                        {this.handleSubmit();}
                    }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TandaForm);
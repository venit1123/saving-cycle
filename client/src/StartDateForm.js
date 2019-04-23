import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class StartDateForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            startDay: new Date().toLocaleDateString()
        };
        this.handleDayChange = this.handleDayChange.bind(this);
    }

    handleDayChange(day) {
        day = day.toLocaleDateString();
        this.setState({
            startDay: day 
        });
    }

    render() {
        console.log(this.state.startDay);
        return (
            <DayPickerInput onDayChange={this.handleDayChange} />
        );
    }
}


export default StartDateForm;
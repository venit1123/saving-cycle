import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import $ from 'jquery';

class StartDayForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDay: new Date()
        };
    }

    handleDayChange(day) {
        this.handleToggle();
        this.setState({startDay: day}, this.handleSubmit.bind(this));
    }

    handleSubmit = () => { 
        this.props.getStartDay(this.state.startDay) 
    }

    handleToggle = () => {
        const toggleForm = this.refs.toggle;
        $(toggleForm).slideToggle();
    } 
    
    render() {
        return (
            <div className='card'>
                <button className='btn main-font blue-button' onClick={this.handleToggle}>Starting day</button>
                <div ref='toggle' className='initiallyHidden' >
                <DayPickerInput onDayChange={this.handleDayChange.bind(this)} />
            </div>
            </div>
 
        );
    }
}


export default StartDayForm;
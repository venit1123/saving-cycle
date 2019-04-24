import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class StartDayForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDay: new Date()
        };
    }

    handleDayChange(day) {
        this.setState({startDay: day}, this.handleSubmit.bind(this));
    }

    handleSubmit = () => { this.props.getStartDay(this.state.startDay) }
    
    render() {
//        console.log(this.state.startDay);
        return (
            <div >
                <DayPickerInput onDayChange={this.handleDayChange.bind(this)} />
            </div>
 
        );
    }
}


export default StartDayForm;
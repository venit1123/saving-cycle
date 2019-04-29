import React, { Component } from 'react';
import $ from 'jquery'

class TimeGapForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeGap: 0
        };
    }

    handleTimeGapChange(event) {
        this.setState({ timeGap: parseInt(event.target.value) }, this.handleSubmit.bind(this));
    }

    handleSubmit = () => {
        this.handleToggle();
        this.props.getTimeGap(this.state.timeGap);
    }

    handleToggle = () => {
        const toggleForm = this.refs.toggle;
        $(toggleForm).slideToggle();
    } 

    render() {
        return (
            <div>
                <button onClick={this.handleToggle}>Time gap:</button>
        
                <form ref='toggle' className='initiallyHidden'>
                <div onChange={this.handleTimeGapChange.bind(this)}>
                    <li>
                        <input type="radio" value="7" name="amount" /> Weekly
                    </li>
                    <li>
                        <input type="radio" value="14" name="amount" /> Every other Week
                    </li>
                    <li>
                        <input type="radio" value="30" name="amount" /> Monthly
                    </li>
                </div>
            </form>
            </div>
        )
    }
}

export default TimeGapForm;
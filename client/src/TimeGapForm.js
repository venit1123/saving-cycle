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
            <div className='card'>
                <button className='btn main-font blue-button' onClick={this.handleToggle}>Time gap</button>
        
                <form ref='toggle' className='initiallyHidden'>
                <div onChange={this.handleTimeGapChange.bind(this)}>
                <lu className="no-radio list-group-mine main-font">
                    <li className="list-group-item list-group-item-action">
                        <input id="radio-one" className="form-radio" type="radio" value="7" name="amount" /> Weekly
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <input id="radio-one" className="form-radio" type="radio" value="14" name="amount" /> Every other week
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <input id="radio-one" className="form-radio" type="radio" value="30" name="amount" /> Monthly
                    </li>
                    </lu>
                </div>
            </form>
            </div>
        )
    }
}

export default TimeGapForm;
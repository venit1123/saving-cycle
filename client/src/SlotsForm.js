import React, { Component } from 'react';
import $ from 'jquery';

class SlotsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slots: 0
        };
    }

    handleSlotsChange = (event) => {
        this.setState({slots: parseInt(event.target.value)}, this.handleSubmit.bind(this));
    }

    handleSubmit = () => {
        this.props.getSlots(this.state.slots);
    }

    handleToggle = () => {
        const toggleForm = this.refs.toggle;
        $(toggleForm).slideToggle();
    } 

    render() {
        return (
            <div>
                <button onClick={this.handleToggle}>Select number of slots:</button>
            <form ref='toggle'>
            <div className='initiallyHidden' onChange={this.handleSlotsChange.bind(this)}>
                <li>
                    <input type="radio" value="5" name="amount" /> 5
                </li>
                <li>
                    <input type="radio" value="10" name="amount" /> 10
                </li>
                <li>
                    <input type="radio" value="12" name="amount" /> 12
                </li>
            </div>
            </form>
            </div>
        )
    }
}

export default SlotsForm;
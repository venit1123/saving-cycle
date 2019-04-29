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
        this.handleToggle();
        this.props.getSlots(this.state.slots);
    }

    handleToggle = () => {
        const toggleForm = this.refs.toggle;
        $(toggleForm).slideToggle();
    } 

    render() {
        return (
            <div className='card'>
                <button className='btn main-font blue-button' onClick={this.handleToggle}>Slots</button>
                <form ref='toggle' className='initiallyHidden'>
                    <div onChange={this.handleSlotsChange.bind(this)}>
                        <ul className="no-radio list-group-mine main-font">
                            <li className="list-group-item list-group-item-action">
                                <input id="radio-one" className="form-radio" type="radio" value="5" name="amount" /> 5
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <input id="radio-one" className="form-radio" type="radio" value="10" name="amount" /> 10
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <input id="radio-one" className="form-radio" type="radio" value="12" name="amount" /> 12
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}

export default SlotsForm;
import React, { Component } from 'react';
import $ from 'jquery';


class MoneyAmountForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0
        };
    }

    handleAmountChange(event) {
        this.setState({ amount: parseInt(event.target.value) },
        this.handleSubmit.bind(this));
    }

    handleSubmit = () => {
        this.handleToggle();
        this.props.getAmount(this.state.amount);
    }

    handleToggle = () => {
        const toggleForm = this.refs.toggle;
        $(toggleForm).slideToggle();
    } 



    render() {
        return (
            <div className='card'>
            <button className='btn main-font blue-button' onClick={this.handleToggle}>Amount</button>
                <form ref='toggle' className='initiallyHidden'>
            <div onChange={this.handleAmountChange.bind(this)}>
            <ul className="">
                <li className="list-group-item list-group-item-action">
                    <input type="radio" value="50" name="amount" /> $50
                </li>
                <li className="list-group-item list-group-item-action">
                    <input type="radio" value="100" name="amount" /> $100
                </li>
                <li className="list-group-item list-group-item-action">
                    <input type="radio" value="200" name="amount" /> $200
                </li>
                </ul>
            </div>
            </form>
            </div>
        )
    }
}

export default MoneyAmountForm;
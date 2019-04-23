import React, { Component } from 'react';

class MoneyAmountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: null
        };
        console.log(this.state.amount)
    }

    handleAmountChange(event) {
        //console.log(event.target.value);
        this.setState({
            amount: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.amount);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div onChange={this.handleAmountChange.bind(this)}>
                <li>
                    <input type="radio" value="50" name="amount" /> $50
                </li>
                <li>
                    <input type="radio" value="100" name="amount" /> $100
                </li>
                <li>
                    <input type="radio" value="200" name="amount" /> $200
                </li>

                <input type="submit" value="Submit" />
            </div>
            </form>
        )
    }
}

export default MoneyAmountForm;
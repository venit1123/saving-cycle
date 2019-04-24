import React, { Component } from 'react';

class MoneyAmountForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0
        };
    }

    handleAmountChange(event) {
        this.setState({ amount: parseInt(event.target.value) }, this.handleSubmit.bind(this));
    }

    handleSubmit = () => {
        this.props.getAmount(this.state.amount);
    }


    render() {
        return (
            <form >
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
            </div>
            </form>
        )
    }
}

export default MoneyAmountForm;
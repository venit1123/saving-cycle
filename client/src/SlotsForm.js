import React, { Component } from 'react';

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


    render() {
        return (
            <form>
            <div onChange={this.handleSlotsChange.bind(this)}>
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
        )
    }
}

export default SlotsForm;
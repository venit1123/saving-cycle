import React, { Component } from 'react';

class TimeGapForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeGap: null
        };
        //console.log(this.state.amount)
    }

    handleTimeGapChange(event) {
        //console.log(event.target.value);
        this.setState({
            timeGap: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.timeGap);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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

                    <input type="submit" value="Submit" />
                </div>
            </form>
        )
    }
}

export default TimeGapForm;
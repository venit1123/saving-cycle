import React, { Component } from 'react';

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
        this.props.getTimeGap(this.state.timeGap);
    }

    render() {
        return (
            <form>
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
        )
    }
}

export default TimeGapForm;
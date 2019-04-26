import React, { Component } from 'react';

class SingleDay extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            admin: 'Itzel - Place Holder',
            day: null,
            availability: true,
            participant: null,
        };
    };

    render(){
        return(
            <div>
                <p>{this.props.date}</p>
                <p>Available</p>
                <button>Select</button>
            </div>
        )
    }
}

export default SingleDay;
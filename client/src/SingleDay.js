import React, { Component } from 'react';
import './SingleDay.css'

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
            <div className='col-sm-12 col-md-6'>
            <div className='card style-card card-margin horizontal-center'>
                <h3 className='title yellow-text'>{this.props.date}</h3>
                <h6 className='yellow-text main-font'>Available</h6>
                <button className='btn rounded-pill light-button' >Select</button>
            </div>
            </div>
        )
    }
}

export default SingleDay;
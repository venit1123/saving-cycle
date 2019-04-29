
import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import SingleDay from './SingleDay';
import Title  from './Title'

class Table extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            days: null
        };
    };



    componentDidMount() {

        let id = this.props.location.state.tandaId;

        fetch(`/tanda/${id}`)
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log(result)
            this.setState({
                isLoaded: true,
                days: result
             })
        }).catch((error) => {
            this.setState({
                isLoaded: true,
                error: "Error: Unable to connect to DB"
            })
            console.log(error)
        });
    }

    render(){
        const { error, isLoaded, days } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
        return(
            <div className='body min-padding'>
            <div className='title'>
                <Title name='Tanda slots'/>
            </div>
                <div className='row'>
                {days.map(date => (
                     <SingleDay 
                     key={date.id}
                     date={date.day}
                     participant={date.user_id} />
                     )
                   )
                 }        
             </div>
             </div>
        );
    }
}
}

export default withRouter(Table);
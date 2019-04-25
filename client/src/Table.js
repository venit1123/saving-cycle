
import React, { Component } from 'react';

class Table extends Component {
    componentDidMount(){
        // console.log("Hello " + this.state)
        console.log("Hello from Table" + this.props.location.state.days)
    }
    render(){
        return(
            <h1>TABLE</h1>
        )
    }
}


export default Table
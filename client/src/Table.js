
import React, { Component } from 'react';
import { withRouter } from "react-router-dom"

class Table extends Component {
    constructor() {
        super();
        this.state = {
            days: null
        };
    };



    componentDidMount(){
        console.log(this.props.location.state.days );
        // setTimeout(() => {
        //     this.setState({
        //         days: this.props.location.state.days
        //     })
        // },200)

        // this.setState({
        //     days: this.props.location.state.days 
        // })
    }

    render(){
        // const { error, isLoaded, days } = this.state;
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {
        //     return (
        //     <div>
        //         <ul>
        //         {days.map(day => (
        //             <li>{"HELLO"}</li>
        //             )
        //           )
        //         }        
        //        </ul>
        //     </div>
        return(
            <h1>Table</h1>
        );
    }
}


export default withRouter(Table);
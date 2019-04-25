import React, { Component } from 'react';
import Table from './Table'
import './App.css';
import { withRouter } from "react-router-dom"

class Tanda extends Component {
    render(){
        return(
            <Table />
        )
    }
}

export default withRouter(Tanda)
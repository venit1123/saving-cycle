import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Home extends Component {

    nextPath(path) {
        this.props.history.push(path);
    }
    
    render(){
        return(
            <div>
                <h1>Home</h1>
                <button onClick = {() =>  this.nextPath('/newTanda')} >
                    Create Tanda 
                </button>
            </div>
       )
    }
}

export default withRouter(Home);
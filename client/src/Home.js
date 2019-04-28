import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css'

class Home extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    
    render(){
        return(
            <div className="body container-fluid">
                <div className="container">
                    <div className="row">
                        <div>
                             <button onClick = {() =>  this.nextPath('/newTanda')} >
                            Create Tanda 
                            </button>
                            
                    
                            </div>
                        </div>
                    </div>
                </div>
       )
    }
}

export default withRouter(Home);
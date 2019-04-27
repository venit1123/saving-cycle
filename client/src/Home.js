import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    
    render(){
        return(
            <div className="container-fluid">
                <div className="nav">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <div className="row">
            <div>
                <h1>Home</h1>
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
import React, { Component } from 'react';
import './Nav.css'
import './App.css'


class Nav extends Component{
    render(){
        return(
            <div className="body main-font nav">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Tanda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Settings</a>
                        </li>
                    </ul>
                </div>
        )
    }
}

export default Nav;
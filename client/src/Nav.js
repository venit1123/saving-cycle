import React, { Component } from 'react';
import './Nav.css'
import './App.css'

class Nav extends Component {

    login = () => {
        this.props.auth.login();
    }
    // calls the logout method in authentication service
    logout = () => {
        this.props.auth.logout();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        console.log("INFO FROM NAV ", this.props.getUserInfo);
        return (
            <div className="body main-font nav">
                    {
                        isAuthenticated() &&

                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/home">Tandas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/newTanda">Create Tanda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={this.logout}>Logout</a>
                        </li>
                    </ul> 
                        
                    }
                    {
                        !isAuthenticated() && 
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.login}>Login</a>
                                </li>
                            </ul>
                            
                    }
            </div>
        )
    }
}

export default Nav;
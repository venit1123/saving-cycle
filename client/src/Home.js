import React, { Component } from 'react';
import Welcome from './Welcome.js'
import Tandas from './Tandas'

class Home extends Component {
    // calls the login method in authentication service
    login = () => {
        this.props.auth.login();
    }
    // calls the logout method in authentication service
    logout = () => {
        this.props.auth.logout();
    }
    render() {
        console.log("FROM home2:", this.props.getUserInfo)
        // calls the isAuthenticated method in authentication service
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                {
                    isAuthenticated() &&
                    <Tandas getUserInfo={this.props.getUserInfo}/> 
                }
                {
                    !isAuthenticated() && (
                        
                        <Welcome />
                    )
                }
            </div>
        );
    }
}

export default Home;

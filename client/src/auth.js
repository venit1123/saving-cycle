import auth0 from 'auth0-js';

import history from './history';

export default class Auth {
    // Please use your own credentials here
    auth0 = new auth0.WebAuth({
        domain: 'venit1123.auth0.com',
        clientID: 'wXsn6TbXywguRjBG4NlkDUKZNXz9asfr',
        redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3001/callback' : '',
        audience: 'https://venit1123.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    login = () => {
        this.auth0.authorize();
    }

    // parses the result after authentication from URL hash
    handleAuthentication = (callback) => {
        this.auth0.parseHash((err, authResult) => {
            console.log("RESULTS FROM AUTH0:" , authResult);
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.auth0.client.userInfo(authResult.accessToken, function (err, user) {
                    console.log("INFO FROM THE USER", user);
                    callback(user);
                });
                //history.replace('/home');
            } else if (err) {
                history.replace('/home');
                console.log(err);
            }
        });
    }

    // Sets user details in localStorage
    setSession = (authResult) => {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        history.replace('/home');
    }

    // removes user details from localStorage
    logout = () => {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/home');
    }

    // checks if the user is authenticated
    isAuthenticated = () => {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}

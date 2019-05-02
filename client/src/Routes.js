import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Callback from './Callback';
import Auth from './auth.js';
import history from './history';
import Nav from './Nav'
import Welcome from './Welcome'
import NewTanda from './NewTanda';

const auth = new Auth();
let userInfo= 'EMPTY'

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication((user) => {
            console.log("FROM CALLBACK: ", user)
            userInfo = user;
        });
    }
}

const getUserInfo = () => {
    return userInfo;
}

const Routes = () => (
<BrowserRouter>
<div>
    <Router history={history} component={Nav}>
        <Route path="" render={(props) => <Nav auth={auth} {...props} />} />
        
         <Route exact path="/" render={(props) => <Welcome getUserInfo="itzlee" auth={auth} {...props} /> }/>
        <Route path="/home" render={(props) => <Home getUserInfo="itzlee" auth={auth} {...props} />} />
        <Route path='/newTanda' component={NewTanda}/>
        <Route path="/callback" render={(props) => {
            console.log("CALLBACK")
            handleAuthentication(props);
            return <Callback {...props} />
        }} />
    </Router>
 </div>
    </BrowserRouter>
);





{/* //<Route path="" component={Nav} />
//         <Route exact path="/" component={Welcome} />
//         <Route exact path="/home" component={Home} />
//         <Route exact path="/newTanda" component={NewTanda} />
//         <Route exact path="/table" component={Table} /> */}
export default Routes;

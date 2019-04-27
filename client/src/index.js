import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewTanda from './NewTanda'
import Home from './Home';
import Table from './Table'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Welcome from './Welcome';

ReactDOM.render(<Router>
    <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/newTanda" component={NewTanda} />
        <Route exact path="/table" component={Table} />

    </div>
</Router>, 
document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

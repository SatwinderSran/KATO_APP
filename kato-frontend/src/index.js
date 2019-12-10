import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import Info from "./components/Info";
import * as serviceWorker from './serviceWorker';


const routing = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/dashboard/" component={Info}/>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

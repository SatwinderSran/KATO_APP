import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import './App.css';
import Parent from "./components/Parent";

class App extends Component{

    render() {
        return (
            <div>
                <Parent/>
            </div>
        );
    }
}

export default App;

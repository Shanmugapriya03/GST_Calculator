import React from 'react';
import {render} from 'react-dom';
import Head from './components/head';
import Dashboard from './components/dashboard';
import axios from 'axios';
class App extends React.Component {

  render () {
    return (
        <div>
            <h1>React</h1>
            <p>{JSON.stringify(this.state)}</p>
        </div>
    );

  }
}

render(
    <span>
        <Head/>
        <Dashboard/>
    </span>
    ,document.getElementById('app'));

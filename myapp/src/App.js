import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Test} from './reactjs_output'

class App extends Component {
  constructor (props) {
    super(props)
    let test = new Test('http://119.23.129.240/api')
    test.getProjects().then(function (res) {
      console.log(res.body)
    }, function (err) {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

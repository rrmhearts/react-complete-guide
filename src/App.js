import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'

class App extends Component {
  /* only class Components, state reserved word*/
  state = {
    persons: [
      { name: 'Ryan', age: 28 },
      { name: 'Zoe', age: 29 },
      { name: 'Alice', age: 26 }
    ]

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button>Switch Name</button>
        <Person name="Ryan" age={Math.floor(Math.random() *30)}/>
        <Person name="Alice" age={Math.floor(Math.random() *30)}/>
        <Person name="Zoe" age={Math.floor(Math.random() *30)}>My hobby is sports!</Person>
      </div>
    );
  }
}

export default App;

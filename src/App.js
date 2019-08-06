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
  } // if changes, rerenders dom

  switchNameHandler = () => {
    console.log('was clicked!');
    console.log(this.state.persons, {name:'b',age:5});
    this.setState( {
      persons: [
        ...this.state.persons, {name: 'Bob', age: 50}
      ]
    });
  }

  render() {

    const items = [];

    for (const [ind, val] of this.state.persons.entries())
      items.push(<Person key={ind} name={val.name} age={val.age}/>);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {items}
      </div>
    );
  }
}

export default App;

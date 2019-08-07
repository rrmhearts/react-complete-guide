import React, { useState } from 'react';
import './App.css';
import Person from './components/Person'

const app = props => {

  const [personsState, setPersons] = useState({
    persons: [
      { name: 'Ryan', age: 28 },
      { name: 'Zoe', age: 29 },
      { name: 'Alice', age: 26 }
    ],
    otherState: "Other"
  }); // returns [current state, function to update state]

  // won't get deleted when updating person.
  const [otherState, setOtherStates] = useState('some other value');

  console.log(personsState, otherState);
  const switchNameHandler = () => {
    setPersons( { // REPLACES ALL OF STATE
      persons: [
        { name: 'WENDY', age: 1 },
        { name: 'Zoe', age: 29 },
        { name: 'Alice', age: 26 }      
      ],
        otherState: personsState.otherState
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name}
              age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name}
              age={personsState.persons[1].age}/>
    </div>
  );
  
}

export default app;

/*

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
  */
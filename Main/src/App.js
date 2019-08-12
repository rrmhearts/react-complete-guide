import React, { Component } from 'react';
import classes from './App.css'; /* with webpack changes, this is now scoped to this file */
import Person from './Person/Person';

/*
  Statefull components. Only have the ones you need.
*/
class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Wendy', age: 1 },
      { id: '1', name: 'Zoe', age: .2 },
      { id: '2', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // like SLICE ES6
    persons.splice(personIndex, 1); // removes person from state IF NOT SLICE. BAD

    this.setState({persons: persons});
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] // create new person
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div> 
          {this.state.persons.map((person, index) => {
            return <Person key={person.id} // important, expected for lists
                           name={person.name}
                           age={person.age}
                           click={() => this.deletePersonHandler(index)} // or bind
                           changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    //let classes = ['red', 'bold'].join(' '); // "red bold" class list
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // class red
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // red and bold
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>Toggle persons that can be deleted or editted!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <p id="version">{React.version}</p>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App; // radium wraps your component

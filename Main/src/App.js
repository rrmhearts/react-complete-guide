import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid white',
      padding: '8px',
      cursor: 'pointer',
      /* Radium supplied CSS */
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'pink',
        color: 'black'
      };
    }

    //let classes = ['red', 'bold'].join(' '); // "red bold" class list
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // class red
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // red and bold
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>Toggle persons that can be deleted or editted!</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
          <p id="version">{React.version}</p>
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App); // radium wraps your component

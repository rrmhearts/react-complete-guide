import React, { Component } from 'react';
import classes from './App.css'; /* with webpack changes, this is now scoped to this file */
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

/*
  Statefull components. Only have the ones you need.
*/
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: '0', name: 'Wendy', age: 1 },
        { id: '1', name: 'Zoe', age: .2 },
        { id: '2', name: 'Belles', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true
    };
  }
/* MORE MODERN syntax, replace constructor
  state = {
    persons: [
      { id: '0', name: 'Wendy', age: 1 },
      { id: '1', name: 'Zoe', age: .2 },
      { id: '2', name: 'Belles', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };
  */

  // Rarely used but will stay. Create and Update lifecycles
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  //componentWillMount() {
  //  console.log('[App.js] componentWillMount');
  //}

  /* Important
   * Hooks
   * Below
   */
  // Place to make http requests, fetch data, etc.
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    //return false; // prevents update!!
    return true; // allows update!!
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {
          this.setState({showCockpit: !this.state.showCockpit})}
          }>Toggle Cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App; // radium wraps your component

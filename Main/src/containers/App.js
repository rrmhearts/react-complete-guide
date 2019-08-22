import React, { Component } from 'react';
import classes from './App.css'; /* with webpack changes, this is now scoped to this file */
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
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
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
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

    // making a copy of object. allows === compare of objects, different references.
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1 // react guarentees previous state.
      };
    });
    /*
    this.setState({ // good if not dependent on previous state.
      persons: persons,
      changeCounter: this.state.changeCounter + 1 // not guarenteed to be latest state
    }); // schedules state update and re-render cycle. Not Immediate, but usually close.
    */
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated: true});

  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
    }

    return (
      <Aux>
        <button onClick={() => {
          this.setState({showCockpit: !this.state.showCockpit})}
          }>Toggle Cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App); // HOC that applies classes to App..

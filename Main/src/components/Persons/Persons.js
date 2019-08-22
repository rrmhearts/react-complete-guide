import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    // PureComponent replaces shouldComponentUpdate with  all props check
/*
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');

        // compares pointers, functional immutable objects...
        if (
            nextProps.persons !== this.props.person || // checking one prop.
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked   // but may want to check all like this
            ) { 
            return true; // continue updating. 
        } else {
            return false; // should not continue.
        }
    } // only use when needed.
*/
    // Save state before update
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot' }; //return null;
    }

    // Done updating. use Snapshot. Useful.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');

    }

    render() {
        console.log('[Person.js] rendering...');

        // array of adjacent elements allowed as long as key exists.
        return this.props.persons.map((person, index) => {
            return <Person key={person.id} // important, expected for lists
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)} // or bind
                changed={(event) => this.props.changed(event, person.id)} />
            });
    }
};

export default Persons;
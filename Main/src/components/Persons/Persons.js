import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    //static getDerivedStateFromProps(props, state) {
    //    console.log('[Persons.js] getDerivedStateFromProps');
    //    return state;
    //}

    // OLD 
    //componentWillReceiveProps(props) {
    //    console.log('[Persons.js] componentWillReceiveProps', props);
    //}

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true; // continue updating. false, should not continue.
    }

    // Save state before update
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot' }; //return null;
    }

    // OLD
    //componentWillUpdate() {
    //}

    // Done updating. use Snapshot. Useful.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Person.js] rendering...');
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
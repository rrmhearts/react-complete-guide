import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
//import { connect } from 'react-redux';

class Persons extends Component {

    render () {
        console.log(this.props);
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const state_to_props = state => {
    return {
        persons: state.persons
    }
}

const dispatch_to_props = dispatch => {
    console.log('here');

    return {
        personAddedHandler: () => {
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            
            dispatch( { type: 'ADD', person: newPerson} );
        },
        personDeletedHandler: (personId) => dispatch( { type: 'DELETE', personId: personId} )
    }
}

//export default connect(state_to_props, dispatch_to_props)(Persons);
export default Persons;
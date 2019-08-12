import React from 'react';
import Person from './Person/Person';

const persons = ( props ) => 
    props.persons.map((person, index) => {
        return <Person key={person.id} // important, expected for lists
            name={person.name}
            age={person.age}
            click={() => props.clicked(index)} // or bind
            changed={(event) => props.changed(event, person.id)} />
      });
export default persons;
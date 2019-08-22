import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // class red
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // red and bold
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Toggle persons that can be deleted or editted!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;
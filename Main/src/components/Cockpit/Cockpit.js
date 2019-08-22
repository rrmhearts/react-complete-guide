import React, { useEffect } from 'react';
import classes from './Cockpit.css';

/* useEffect is the 2nd most important React hook
 * next to useState. Not a lifecycle hook
*/

const cockpit = (props) => {

  // useState() ... for props

  // executes every render cycle. like componentDidUpdate + componentDidMount in one
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // http request...
      const timer = setTimeout(() => {
        alert('Saved data to cloud!');
      }, 1000);
    //}, [props.persons]); // only executes when this changes.

      // Runs before useEffect but after the first render cycle.
      // similar to componentWillUnmount
      return () => {
        clearTimeout(timer); // remove timer on unmount.
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, []); // only execute ONCE, no change dependencies.

    // can have multiple useEffects...
    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }; // this will happen when toggle person clicked. Cockpit changes
    }); // any state change.

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
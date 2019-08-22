import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

/* useEffect is the 2nd most important React hook
 * next to useState. Not a lifecycle hook
*/

const cockpit = (props) => {
  const toggleBtnRef = useRef(null); //React.createRef won't work in function.
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  // useState() ... for props
  // executes AFTER every render cycle. like componentDidUpdate + componentDidMount in one
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      toggleBtnRef.current.click();

      // http request...
    //}, [props.persons]); // only executes when this changes.

      // Runs before useEffect but after the first render cycle.
      // similar to componentWillUnmount
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, []); // only execute ONCE, no change dependencies. mount and unmount []

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

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // class red
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // red and bold
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Toggle persons that can be deleted or editted!</p>
            <button
              ref={toggleBtnRef}
              className={btnClass}
              onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Login</button>
        </div>
    );
};

export default React.memo(cockpit); //memorize component. only rerender if input changes.
// almost must fix persons.length. Only use when needed.
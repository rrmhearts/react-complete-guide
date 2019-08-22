import React from 'react';

/* 
Sets up a class on a div

Wrapper with different functionality.
*/
const withClass = (WrappedComponent, className) => { // reference to component., 2nd arg that's specific
    return props => ( // can forward this props to the props in WrappedComponent.. below..
        // {name: "max", age: 29 }
        <div className={className}>
            <WrappedComponent {...props}/> 
        </div>
    ); // functional component
};

export default withClass;
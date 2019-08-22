import React from 'react';

/* 
Sets up a class on a div

Wrapper with different functionality.
*/
const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;
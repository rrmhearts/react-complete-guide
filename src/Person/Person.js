import React from 'react';

/*
    Stateless is good practice.
*/
const person = ( props ) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
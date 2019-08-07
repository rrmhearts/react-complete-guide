import React from 'react';
/*
    Stateless is good practice.
*/
const output = ( props ) => {
    let style = {
        width: '30%',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '20px',
        margin: '10px auto',
        textAlign: 'center',
        backgroundColor: 'white',
    }
    let buttonstyle = {
        backgroundColor: 'orange',
        font: 'inherit',
        border: '1px solid orange',
        padding: '8px',
        cursor: 'pointer'
    }
    return (
        <div className="Person" style={style}>
            <p>{props.username}: This is the first paragraph of output.</p>
            <p>{props.username}: This is the second paragraph of output</p>
            <button style={buttonstyle} onClick={props.selectUser}>Select</button>
        </div>
    )
};

export default output;
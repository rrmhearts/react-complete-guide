import React, { Component } from 'react';


const valid = (props) => {
    let validate = props.length < 8 ? 
        <p style={{color: 'red'}}>"Text too Short!"</p> :
        props.length > 20 ?
            <p style={{color: 'red'}}>"Text too LONG!"</p> :
            <p style={{color: 'green'}}>GOOD.</p>;
    return (
        <div>
            <p>Len: {props.length}</p>
            {validate}
        </div>
    )

}

export default valid;
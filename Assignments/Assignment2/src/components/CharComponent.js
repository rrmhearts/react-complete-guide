import React, { Component } from 'react';
import './CharComponent.css';

const charc = (props) => {

    return (
        <div className="CharComponent" onClick={props.click}>
            <p>{props.letter}</p>
        </div>
    )

}

export default charc;
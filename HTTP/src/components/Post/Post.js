import React from 'react';

import './Post.css';

const post = (props) => {
    /* Prop routing not passed down the component tree.
       Does not have history, location, match, etc.
    */
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
}

export default post;
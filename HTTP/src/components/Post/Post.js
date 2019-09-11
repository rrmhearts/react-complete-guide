import React from 'react';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
    /* Prop routing not passed down the component tree.
       Does not have history, location, match, etc.
    */
    console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
}

// withRouter brings props to this component!
export default withRouter(post); // "Route Aware"
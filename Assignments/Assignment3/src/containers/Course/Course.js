import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Course extends Component {
    render () {
        console.log(this.props);

        if (this.props.location.params === undefined)
        {
            return <Redirect to="/courses" />
        }
        return (
            <div>
                <h1>{this.props.location.params.title}</h1>
                <p>You selected the Course with ID: {this.props.location.params.id}</p>
            </div>
        );
    }
}

export default Course;
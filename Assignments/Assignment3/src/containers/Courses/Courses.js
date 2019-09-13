import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
    }

    render () {

        let course = null;
        if (this.props.location.params)
        {
            course = <Course title={this.props.location.params.title}
                             id={this.props.location.params.id}/>
        } 
        console.log(this.props);
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <NavLink key={course.id}
                                            to={{
                                                pathname: "/courses",
                                                params: {
                                                    title: course.title,
                                                    id: course.id
                                                }
                                            }}
                                   >
                                       <article className="Course" >{course.title}</article>;
                                   </NavLink>
                        } )
                    }
                </section>
                {course}

            </div>
        );
    }
}

export default Courses;
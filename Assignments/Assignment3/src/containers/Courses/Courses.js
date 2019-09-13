import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        currentCourse: null
    }

    render () {

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <NavLink key={course.id}
                                            to={{
                                                pathname: "/course",
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

            </div>
        );
    }
}

export default Courses;
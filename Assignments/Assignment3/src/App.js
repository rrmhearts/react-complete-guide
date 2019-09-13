import React, { Component } from 'react';
import { Route, Switch, NavLink, BrowserRouter, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <NavLink to="/">Home</NavLink>
            <br/>
            <NavLink to="/users">Users</NavLink>
            <br/>
            <NavLink to="/courses">Courses</NavLink>
          </header>
          <Switch>
            <Route path="/users" component={Users}></Route>
            <Route path="/courses" component={Courses}></Route>
            <Route name="course" path="/course" component={Course} />
            <Route path="/" exact render={() => <h1>Home</h1>}></Route>
            <Route render={() => <h1>404 Error</h1>} />
          </Switch>
          <Redirect from="/all-courses" to="/courses"></Redirect>

          <ol style={{textAlign: 'left'}}>
            <li><span role="img" aria-label="check">&#9989;</span> 
              Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li><span role="img" aria-label="check">&#9989;</span> 
              Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li><span role="img" aria-label="check">&#9989;</span> 
              Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li><span role="img" aria-label="check">&#9989;</span> 
              Pass the course ID to the "Course" page and output it there</li>
            <li><span role="img" aria-label="check">&#9989;</span> 
              Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li><span role="img" aria-label="check">&#9989;</span> 
              Load the "Course" component as a nested component of "Courses"</li>
            <li><span role="img" aria-label="check">&#9989;</span> 
              Add a 404 error page and render it for any unknown routes</li>
            <li><span role="img" aria-label="check">&#9989;</span> 
              Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

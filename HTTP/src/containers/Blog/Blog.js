import React, { Component } from 'react';
import { Route, NavLink, Switch} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={
                                /* advanced setup ex
                            Pathname is Always absolute path. 
                            Use URL in props.match.url to create 'relative path' */
                            {
                                pathname: '/new-post',
                                hash: '#submit',
                                searh: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
                {/* Parsed from top to bottom. :id can be ANYTHING. 
                    Should be last ordered. :id will still load on new-post
                    Switch forces only 1 route to be loaded.*/}
            </div>
        );
    }
}

export default Blog;
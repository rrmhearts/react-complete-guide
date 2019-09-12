import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    state = {
        auth: false
    }
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>Posts</NavLink></li>
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
                    { this.state.auth ? <Route path="/new-post" component={NewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not Found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>
                {/* Parsed from top to bottom. :id can be ANYTHING. 
                    Should be last ordered. :id will still load on new-post
                    Switch forces only 1 route to be loaded.*/}
            </div>
        );
    }
}

export default Blog;
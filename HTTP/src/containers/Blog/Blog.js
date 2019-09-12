import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../components/HOC/asyncComponent';

//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    // Only importing when AsyncNewPost is called. Not default downloaded.
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
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
                    {/* NewPost should only be loaded if user needs it. Don't download NewPost
                        Idea of "Lazy Loading" OR "Code Splitting" Need React-Router v4 */}
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Redirect exact from="/" to="/posts" />
                    <Route render={() => <h1>Not Found</h1>} />
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
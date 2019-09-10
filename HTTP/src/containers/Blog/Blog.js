import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{ /* advanced setup ex */
                                pathname: '/new-post',
                                hash: '#submit',
                                searh: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() =>
                    <Posts />
                }/>
                <Route path="/new-post" render={() => 
                    <NewPost />
                }/>*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />

            </div>
        );
    }
}

export default Blog;
/*
                <section>
                    <FullPost id={this.state.selectedPostID}/>
                </section>
                <section>
                    <NewPost />
                </section>
                */
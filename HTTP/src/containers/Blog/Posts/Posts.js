import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Route, Link} from 'react-router-dom';

import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        /* Props contains history, location, match and proto objects as well as
            passed props. Useful for many things.
            */
        axios.get('/posts') // async return promise
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Ryan M'
                    }
                });
                this.setState({
                    posts: updatedPosts
                });
                //sconsole.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    postSelected = (id) => {
        // Navigation is about a stack of pages. you can push pop pages on the stack.
        // this.props.history.push({pathname: '/' + id});
        // manually add /id onto stack. Router will then load this page.
        console.log(id);
        //this.props.history.push('/posts/' + id); // same as  above.

    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong.</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/posts/'+post.id} key={post.id}>
                        <Post   title={post.title} 
                                author={post.author}
                                clicked={() => this.postSelected(post.id)}/>
                    </Link>
                );
            }); // end map.
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;
import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';

import './Posts.css';

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
        this.setState({selectedPostID: id})
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong.</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/' + post.id} key={post.id} >
                        <Post title={post.title} 
                              author={post.author}
                              clicked={() => this.postSelected(post.id)}/>
                    </Link>
                );
            }); // end map.
        }
        return (
            <section className="Posts">
               {posts}
            </section>
        );
    }
}

export default Posts;
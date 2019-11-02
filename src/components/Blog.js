import React, { Component } from 'react';
import axios from 'axios';

var PORT = 9000;

class Blog extends Component {
    // data:
    //  objId:
    //      id:
    //      title:
    //      content:
    //      createdAt:
    //      updatedAt:
    //      userId

    state = {
        posts: [],
        isLoading: true,
        errors: null
    };

    getPosts() {
        axios.get(`http://localhost:${PORT}/posts`)
            .then(res => {
                this.setState({
                    posts: res.data,
                    isLoading: false
                });
            })
            .catch(err => this.setState({ err, isLoading: false}));
    };

    componentDidMount() {
        this.getPosts()
    }

    render() {
        const { isLoading, posts } = this.state;
        return(
            <div className='blog'>
                {!isLoading ? (
                    posts.map(post => {
                        const {id, title, content, createdAt } = post;
                        return (
                            <div key={id}>
                                <article className='pa3 pa5-ns'>
                                    <h1 classNem='f3 fl-m f-headline-l'>{title}</h1>
                                    <h5>{createdAt}</h5>
                                    <p className='measure lh-copy'>{content}</p>
                                </article>
                            </div>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
};

export default Blog;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

import BlogBody from './BlogBody';

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
            posts: _.reverse(res.data),
            isLoading: false
          });
        })
      .catch(err => this.setState({ err, isLoading: false}));
    };

    componentDidMount() {
        this.getPosts()
    }

   // TODO: BlogBody not rendering in separate page 

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
                      <Link to={`/blog/${post.id}`} className='f3 fl-m f-headline-l'>{title}</Link>
                      <h5>{createdAt}</h5>
                      <p className='measure lh-copy'>{content}</p>
                    </article>
                  </div>

                  );
            })
            ) : (
            <p>Loading...</p>
          )}
          <Switch>
            <Route  path='/blog/:id' render={props => <BlogBody {...props} />} />
          </Switch>
       </div>
    );
  }
};

export default Blog; 

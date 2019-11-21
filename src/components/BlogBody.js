import React, { Component } from 'react';
import axios from 'axios';

const PORT = 9000;

class BlogBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      post: null, 
      title: null,
      content: null,
      createdAt: null,
      isLoading: true,
      errors: null
    }
    this.getPost(props.match.params.id);
    console.log('Post is',this.state.post);
  }


  getPost(id) {
    axios.get(`http://localhost:${PORT}/posts/${id}`)
      .then(res => {
        this.setState({
          id,
          post: res.data,
          title: res.data.title,
          content: res.data.content,
          cratedAt: res.data.createdAt,
          isLoading: false
        });
      })
      .catch(err => this.setState({ err, isLoading: false}));
  };

  //componentDidMount() {
  //  const { id } = this.state; 
  //  this.getPost(id);
  //  console.log('Hello from componentDidMount');
  //}

  render() {
    const { id, title, content, createdAt } = this.state;
    return(
        <div className='blog'>
          <div key={id}>
            <article className='pa3 pa5-ns'>
              <h3>{title}</h3>
                <h5>{createdAt}</h5>
                <p className='measure lh-copy'>{content}</p>
            </article>
          </div>
        </div>
      )
  }
};

export default BlogBody;

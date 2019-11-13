import React, { Component } from 'react';
import { Admin as Administrator, Resource, ListGuesser } from 'react-admin';
import axios from 'axios';
import simpleRestProvider from 'ra-data-simple-rest'

import AdminDash from './AdminDash.js'
import { AdminList } from './AdminList';


const PORT = 9000;

class Admin extends Component {
    
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
        
        const { posts } = this.state;
        for(let i=0; i<posts.length; i++)
            console.log(posts[i].title);
        return(
            <Administrator dashboard={AdminDash} dataProvider={ simpleRestProvider(posts)} > 
                <Resource name='posts' list={AdminList} /> 
            </Administrator>
        );
    }
}

export default Admin;

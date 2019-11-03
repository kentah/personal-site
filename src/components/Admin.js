import React, { Component } from 'react';
import { Admin as Administrator, Resource, ListGuesser } from 'react-admin';
import axios from 'axios';
import simpleRestProvider from 'ra-data-simple-rest'

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
        
        return(
            <Administrator dataProvider={simpleRestProvider(posts)}>
                <Resource name='Posts' list={ListGuesser} />
            </Administrator>
        );
    }
}

export default Admin;

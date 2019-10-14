import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../css/nav.css';

import Main from '../components/Main';
import About from '../components/About';
import Blog from '../components/Blog';


class Nav extends Component {

    render() {
        return(
            <Router>
                <div id='gray'>
                    <nav id='top' className='pa3 pa4-ns'>
                        <Link to='/' className='link dim near-black b f6 f4-ns dib mr3'>Kent-Howard</Link>
                        <Link to='/' className='link underline-hover mid-gray f6 f5-ns dib mr3'>Home</Link>
                        <Link to='/about' className='link underline-hover mid-gray f6 f5-ns dib mr3'>About</Link>
                        <Link to='/blog' className='link underline-hover mid-gray f6 f5-ns dib mr3'>Blog</Link>
                        <Link to='/contact' className='link underline-hover mid-gray f6 f5-ns dib' href='#' title='Contact'>Contact</Link>
                    </nav>
                <Route path='/' component={ Main } />
                <Route path='/about' component={ About } />
                <Route path='/blog' component={ Blog } />
                </div>
            </Router>
        );
    }
}

export default Nav;

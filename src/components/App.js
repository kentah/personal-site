import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import About from './About';
import Footer from './Footer';
import Admin from './Admin';

class App extends Component { 

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
                </div>

                <Route exact path='/' component={ Home } />
                <Route path='/about' component={ About } />
                <Route path='/blog' component={ Blog } />
                <Route path='/admin' component={ Admin } />
            <Footer />
            </Router>
        );
    }

}

export default App;

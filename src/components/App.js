import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Footer from './Footer';
import Admin from './Admin';
import { AuthContext } from '../context/auth';

import Login from '../pages/Login';
import Signup from '../pages/Signup';




class App extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            authTokens: this,
            setAuthTokens: this
        }
    };

    setTokens = data => {
        localStorage.setItem('tokens', JSON.stringify(data));
        this.setAuthTokens(data);
    };

    render() {
       const { authTokens, setAuthTokens } = this.state;

        return(
            <AuthContext.Provider value={{ setTokens : authTokens }}> 
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
                <Route  path='/blog' component={ Blog } />
                <Route path='/login' component={ Login } />
                <Route path='/signup' component={ Signup } />
                <PrivateRoute path='/admin' component={ Admin } />
            <Footer />
            </Router>
            </AuthContext.Provider>
        );
    }
}

  
export default App;

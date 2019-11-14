import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

//import logoImg from '../images/logo.png';    TODO create
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForm';
import { useAuth } from '../context/auth';


const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthTokens } = useAuth();

    const postLogin = () => {
        axios.post('url to auth', {   // TODO  set up google auth
            userName,
            password
        }).then(result => {
            if(result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if(isLoggedIn) {
        return <Redirect to='/' />;
    }

    return(
        <Card>
            <Form>
                <Input 
                    type='username'
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder='username' 
                />
                <Input 
                    type='password'
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder='password' 
                />
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <Link to='/signup'>Don't have an account?</Link>
            { isError &&<Error>The username or password provided is bullshit!</Error> }
        </Card>
    );
}

export default Login;

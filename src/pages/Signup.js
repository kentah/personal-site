import React from 'react';
import { Link } from 'react-router-dom';
//import logoImg from '../images/logo.png';    TODO create
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';


const Signup = () => {
    return(
        <Card>
            <Form>
                <Input type='text' placeholder='username' />
                <Input type='password' placeholder='password' />
                <Input type='password' placeholder='password again' />
                <Button>Sign Up</Button>
            </Form>
            <Link to='/login'>Already have an account?</Link>
        </Card>
    );
}

export default Signup;


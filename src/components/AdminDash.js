import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';


export default () => (
    <Card>
        <Title title='Blog Admin' />
        <CardContent>Welcome to the blog administration page</CardContent>    
    </Card>
);

import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const AdminList = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source='id' />
            <TextField source='title' />
            <TextField source='content' />
        </Datagrid>
    </List>
);

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import Header from '../../components/Header';
import Form from '../../components/Form';
import List from '../../components/List';

export default class Todo extends Component{
    render(){
        return (
            <div>
                <Header nome="Cadastro" small="Tarefas" />

                <Paper elevation={5}>
                    <Form />
                    <List />
                </Paper>
            </div>
        )
    }
}
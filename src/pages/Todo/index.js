import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

import Header from '../../components/Header';
import Form from '../../components/Form';
import List from '../../components/List';

const MyPaper = styled(Paper)({
    margin: '50px',
    marginTop: '100px',
    padding: '10px 10px',
  });

export default class Todo extends Component{
    render(){
        return (
            <div>
                <MyPaper elevation={5}>
                    <Header nome="Cadastro" small="Tarefas" />

                    <Form />
                    <List />
                </MyPaper>
            </div>
        )
    }
}
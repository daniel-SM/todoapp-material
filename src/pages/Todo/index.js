import React, { Component } from 'react';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import Header from '../../components/Header';
import Form from '../../components/Form';
import List from '../../components/List';

const MyPaper = styled(Paper)({
    margin: '50px',
    padding: '10px 10px',
});

const MyDivider = styled(Divider)({
    margin: '10px',
});

export default class Todo extends Component{
    render(){
        return (
            <div>
                <MyPaper elevation={5}>
                    <Header nome="Cadastro" small="> Tarefas" />
                    <Form />
                    <MyDivider/>
                    <List />
                </MyPaper>
            </div>
        )
    }
}
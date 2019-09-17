import React, { Component } from 'react';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import Header from '../../components/Header';
import Form from '../../components/Form';
import List from '../../components/List';
import api from '../../services/api';

const MyPaper = styled(Paper)({
    margin: '50px',
    padding: '10px 10px',
});

const MyDivider = styled(Divider)({
    margin: '10px',
});

export default class Todo extends Component {
    state = {
        description: '',
        list: [],
    }

    componentDidMount() {
        this.refresh();
    }

    refresh = async (description = '') => {
        const search = description ? `&description__regex=/${description}/` : ''
        const response = await api.get(`/todos?sort=-createdAt${search}`);
        this.setState({
            ...this.state,
            description,
            list: response.data,
        });
    }

    handleSearch = () => {
        this.refresh(this.state.description);
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value,
        })
    }

    handleAdd = async () => {
        await api.post('/todos', { description: this.state.description });
        this.refresh();
    }

    handleRemove = (todo) => {
        api.delete(`/todos/${todo._id}`);
        this.refresh(this.state.description);
    }

    handleMarkAsDone = async(todo) => {
        await api.put(`/todos/${todo._id}`,{ ...todo, done: true });
        this.refresh(this.state.description);
    }

    handleMarkAsPending = async(todo) => {
        await api.put(`/todos/${todo._id}`,{ ...todo, done: false });
        this.refresh(this.state.description);
    }

    handleClear = () => {
        this.refresh();
    }

    render() {
        return (
            <div>
                <MyPaper elevation={5}>
                    <Header nome="Cadastro" small="> Tarefas" />
                    <Form 
                        description={this.state.description}
                        handleChange={this.handleChange}
                        handleAdd={this.handleAdd}
                        handleSearch={this.handleSearch}
                        handleClear={this.handleClear}
                    />
                    <MyDivider />
                    <List 
                        tarefas={this.state.list}
                        handleMarkAsDone={this.handleMarkAsDone}
                        handleMarkAsPending={this.handleMarkAsPending}
                        handleRemove={this.handleRemove}
                    />
                </MyPaper>
            </div>
        )
    }
}
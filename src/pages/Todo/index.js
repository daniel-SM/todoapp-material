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
    
    refresh = async () => {
        const response = await api.get('/todos?sort=-createAt');

        this.setState({
            ...this.state,
            description: '',
            list: response.data,
        });

        console.log(response.data);
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value,
        })
    }

    handleAdd = async () => {
        const response = await api.post('/todos', { description: this.state.description })

        this.refresh();

        console.log(response.data);
    }

    handleRemove = (todo) => {
        api.delete(`/todos/${todo._id}`);

        this.refresh()
    }




    render() {
        return (
            <div>
                <MyPaper elevation={5}>
                    <Header nome="Cadastro" small="> Tarefas" />
                    <Form description={this.state.description}
                        handleChange={this.handleChange}
                        handleAdd={this.handleAdd}
                    />
                    <MyDivider />
                    <List tarefas={this.state.list}
                        handleRemove={this.handleRemove}
                    />
                </MyPaper>
            </div>
        )
    }
}
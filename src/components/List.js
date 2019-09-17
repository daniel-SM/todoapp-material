import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import Icon from './Icon';

const useStyles = makeStyles(theme => ({
    done: {
        minWidth: 35,
        height: 35,
        background: '#008000',
        border: 0,
        borderRadius: 10,
        padding: '0 0',
        alignItems: 'bottom',
        margin: 2,
    },
    undo: {
        minWidth: 35,
        height: 35,
        background: '#FFCC00',
        border: 0,
        borderRadius: 10,
        padding: '0 0',
        alignItems: 'bottom',
        margin: 2,
    },
    delete: {
        minWidth: 35,
        height: 35,
        background: '#BB1000',
        border: 0,
        borderRadius: 10,
        padding: '0 0',
        alignItems: 'bottom',
        margin: 2,
    },
}));

export default (props) => {
    const classes = useStyles();

    const tarefas = props.tarefas || [];

    return (
        <div>
            {/* <Table className={classes.table}> */}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Tarefas</TableCell>
                        <TableCell align="right">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tarefas.map(todo => (
                        <TableRow key={todo._id}>
                            <TableCell component="th" scope="row" style={{ textDecorationLine: (todo.done ? 'line-through' : '') }}>
                                {todo.description}
                            </TableCell>
                            <TableCell align="right">
                                <Button 
                                    variant="contained" 
                                    className={classes.done}
                                    disabled={todo.done}
                                    onClick={() => props.handleMarkAsDone(todo)}
                                > 
                                    <Icon icon='done'/>
                                </Button>
                                <Button 
                                    variant="contained" 
                                    className={classes.undo}
                                    disabled={!todo.done}
                                    onClick={() => props.handleMarkAsPending(todo)}> 
                                    <Icon icon='undo'/>
                                </Button>
                                <Button 
                                    variant="contained" 
                                    className={classes.delete}
                                    disabled={!todo.done}
                                    onClick={() => props.handleRemove(todo)}> 
                                    <Icon icon='delete'/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
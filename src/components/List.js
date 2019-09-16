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
    button: {
        minWidth: 35,
        height: 35,
        background: '#231271',
        border: 0,
        borderRadius: 50,
        padding: '0 0',
        alignItems: 'bottom',
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
                            <TableCell component="th" scope="row">
                                {todo.description}
                            </TableCell>
                            <TableCell align="right">
                                <Button variant="contained" className={classes.button}
                                    onClick={() => props.handleRemove(todo)}
                                > 
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
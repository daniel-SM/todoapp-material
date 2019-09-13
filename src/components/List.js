import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(_id, tarefa) {
    return { _id, tarefa };
  }
  
  const rows = [
    createData(1, 'OK'),
    createData(2, 'Hello'),
    createData(3, 'World'),
    createData(4, 'My little'),
    createData(5, 'Friend'),
  ];

export default (props) => {
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
                    {rows.map(row => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row">
                                {row.tarefa}
                            </TableCell>
                            <TableCell align="right">
                                <h3>ICons</h3>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
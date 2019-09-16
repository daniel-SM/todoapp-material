import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Icon from './Icon';

const useStyles = makeStyles(theme => ({
    textfield: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    button: {
        minWidth: 35,
        height: 35,
        background: '#231271',
        border: 0,
        borderRadius: 50,
        padding: '0 0',
        alignItems: 'bottom',
    },
    list: {
        //
    },
}));

export default (props) => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <TextField id="input-todo"
                        label="Adicione uma tarefa"
                        fullWidth
                        className={classes.textfield}
                        margin="normal"
                        value={props.description} //salvando o valor do state
                        onChange={props.handleChange} //salvando a alteração no state
                    />
                </Grid>
                <Grid item className={classes.icon}>
                    <Button variant="contained" className={classes.button}
                        onClick={props.handleAdd}> {/* adicionando tarefa */}
                        <Icon icon='add' />
                    </Button>
                </Grid>
                <Grid item className={classes.icon}>
                    <Button variant="contained" className={classes.button}>
                        <Icon icon='search' />
                    </Button>
                </Grid>
                <Grid item className={classes.icon}>
                    <Button variant="contained" className={classes.button}>
                        <Icon icon='clear' />
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
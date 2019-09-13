import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Icon from './Icon';

const useStyles = makeStyles(theme => ({
    textfield: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
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
                <Grid item xs={10}>
                    <TextField id="input-todo"
                        label="Adicione uma tarefa"
                        fullWidth
                        className={classes.textfield}
                        margin="normal"
                    />
                </Grid>
                <Grid item className={classes.icon}>
                    <Icon icon='add' />
                </Grid>
                <Grid item className={classes.icon}>
                    <Icon icon='search' />
                </Grid>
                <Grid item className={classes.icon}>
                    <Icon icon='clear' />
                </Grid>
            </Grid>
        </div>
    )
}
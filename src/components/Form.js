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
            <h1>Form</h1>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <TextField id="input-todo"
                        label="Adicione uma tarefa"
                        fullWidth
                        className={classes.textfield}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={1}>
                    <Icon icon='add'/>
                </Grid>
                <Grid item xs={1}>
                    <Icon icon='search'/>
                </Grid>
                <Grid item xs={1}>
                    <Icon icon='clear'/>
                </Grid>
            </Grid>
        </div>
    )
}
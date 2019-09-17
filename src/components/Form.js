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
    add: {
        minWidth: 35,
        height: 35,
        background: '#4682B4',
        border: 0,
        borderRadius: 10,
        padding: 1,
        alignItems: 'bottom',
        margin: 3,
    },
    search: {
        minWidth: 35,
        height: 35,
        background: '#00BFFF',
        border: 0,
        borderRadius: 10,
        padding: '0 0',
        alignItems: 'bottom',
        margin: 3,
    },
    clear: {
        minWidth: 35,
        height: 35,
        background: '#DADADA',
        border: 0,
        borderRadius: 10,
        padding: '0 0',
        alignItems: 'bottom',
        margin: 3,
    },
}));

export default (props) => {
    const classes = useStyles();

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape'){
            props.handleClear();
        }
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <TextField id="input-todo"
                        label="Adicione uma tarefa"
                        fullWidth
                        className={classes.textfield}
                        margin="normal"
                        value={props.description} //salvando o valor do state
                        onChange={props.handleChange} //salvando a alteração no state
                        onKeyUp={keyHandler} //verificando os atalhos
                    />
                </Grid>
                <Grid item className={classes.icon}>
                    <Button variant="contained" className={classes.add}
                        onClick={props.handleAdd}> {/* adicionando tarefa */}
                        <Icon icon='add' />
                    </Button>
                
                    <Button variant="contained" className={classes.search}
                        onClick={props.handleSearch}> {/* pesquisando tarefa */}
                        <Icon icon='search' />
                    </Button>
                    
                    <Button variant="contained" className={classes.clear}
                        onClick={props.handleClear}> {/* limpando o campo */}
                        <Icon icon='clear' />
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
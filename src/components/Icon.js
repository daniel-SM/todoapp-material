import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
    icon: {
        width: 30,
        height: 30,
        padding: 2,
        color: '#fff',
    },
    button: {
        minWidth: 40,
        width: 40,
        height: 40,
        background: '#231271',
        border: 0,
        borderRadius: 50,
        padding: '0 0',
    },
}));

export default (props) => {
    const classes = useStyles();
    
    const setIcon = (icon) => {
        if (icon === 'add') {
            return <Add className={classes.icon}/>
        } else if (icon === 'search') {
            return <Search className={classes.icon}/>
        } else if (icon === 'clear') {
            return <Clear className={classes.icon}/>
        } else {
            return null
        }
    }

    return (
        <Button variant="contained" className={classes.button}>
            {setIcon(props.icon)}
        </Button>
    )
}
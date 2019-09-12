import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
    icon: {
        width: 25,
        height: 25,
        padding: 2
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 0,
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
        <Button size='small' className={classes.button}>
            {setIcon(props.icon)}
        </Button>
    )
}
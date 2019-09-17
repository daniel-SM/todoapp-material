import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import Replay from '@material-ui/icons/Replay';

const useStyles = makeStyles(theme => ({
    icon: {
        width: 30,
        height: 30,
        padding: 2,
        color: '#fff',
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
        } else if (icon === 'delete') {
            return <Delete className={classes.icon}/>
        } else if (icon === 'done') {
            return <Done className={classes.icon}/>
        } else if (icon === 'undo') {
            return <Replay className={classes.icon}/>
        } else {
            return null
        }
    }

    return (
        <div>
            {setIcon(props.icon)}
        </div>
    )
}
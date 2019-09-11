import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.gray,
        marginBottom: 50,
      },
      ul: {
        margin: 0,
        padding: 0,
      },
      li: {
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `4px solid ${theme.palette.divider}`,
      backgroundColor : "#333",
      color:"#ffff",
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
      fontSize : 20,
      fontWeight: 'bold',
      marginLeft: 35,
    },
    link: {
      margin: theme.spacing(1,1.5),
          color:"#ffff",
  
    }, image: {
      marginTop: 4,
      flexWrap4: 'wrap',
      width : 50,
      height: 50,
      borderRadius : 50,
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <AppBar color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography noWrap className={classes.toolbarTitle}>
                        TodoApp        
                    </Typography>
                    <div>
                        <Link variant="button" href='/todos' className={classes.link}>
                        Todo
                        </Link>
                        <Link variant="button" href='/about' className={classes.link}>
                        About
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
};
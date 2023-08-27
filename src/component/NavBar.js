import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          House Hunting
        </Typography>
        <Button color="inherit" className={classes.button}>
          Home
        </Button>
        <Button color="inherit" className={classes.button}>
          Listings
        </Button>
        <Button color="inherit" className={classes.button}>
          About
        </Button>
        <Button color="inherit" className={classes.button}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

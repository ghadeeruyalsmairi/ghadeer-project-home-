import React from 'react';
import { Typography, Link, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(4, 0),
    marginTop: 'auto',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          House Hunting
        </Typography>
        <Typography variant="subtitle1" align="center">
          Find your dream home with us.
        </Typography>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} House Hunting. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          Designed and developed by <Link color="inherit" href="#">
            Your Name
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

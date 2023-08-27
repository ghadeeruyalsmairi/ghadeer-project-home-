
import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(3),
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(2),
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

const Error = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper className={classes.container} elevation={3}>
        <Typography variant="h4" className={classes.title}>
          Oops, something went wrong!
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for does not exist.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          component={Link}
          to="/"
        >
          Go Back Home
        </Button>
      </Paper>
    </Container>
  );
};

export default Error;

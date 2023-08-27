import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(3),
    textAlign: 'center',
    backgroundColor: '#f5f5f5', // Set your desired background color
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

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Welcome to Our House Hunting Website
        </Typography>
        <Typography variant="body1" paragraph>
          Discover your dream home with our extensive listings of properties for sale or rent.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          component={Link}
          to="/filter"
        >
          Start Searching
        </Button>
      </div>
    </Container>
  );
};

export default Home;

import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/path-to-your-image.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.palette.common.white,
    padding: theme.spacing(10, 0),
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.hero}>
      <Typography variant="h2" className={classes.title}>
        Find Your Dream Home
      </Typography>
      <Typography variant="h5">
        Explore a wide range of properties for sale or rent.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        Get Started
      </Button>
    </Container>
  );
};

export default HeroSection;

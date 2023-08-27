import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useParams, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(3),
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(2),
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  details: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

const Details = () => {
  const classes = useStyles();
  const { id } = useParams(); // Assuming you pass the id as a URL parameter
  const propertyDetails = {
    // Replace this with your actual property details based on the id
    baths: 3,
    beds: 4,
    price: '$450,000',
    space: '2,500 sq. ft.',
    briefDetails: 'Spacious home with modern amenities.',
  };

  return (
    <Container maxWidth="sm">
      <Paper className={classes.container} elevation={3}>
        <Typography variant="h4" className={classes.title}>
          Property Details
        </Typography>
        <Typography variant="h6" className={classes.details}>
          Bedrooms: {propertyDetails.beds}
        </Typography>
        <Typography variant="h6" className={classes.details}>
          Bathrooms: {propertyDetails.baths}
        </Typography>
        <Typography variant="h6" className={classes.details}>
          Price: {propertyDetails.price}
        </Typography>
        <Typography variant="h6" className={classes.details}>
          Space: {propertyDetails.space}
        </Typography>
        <Typography variant="body1" paragraph>
          {propertyDetails.briefDetails}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          component={Link}
          to={`/details/${id}`} // Modify the URL to match your URL structure
        >
          Buy Now
        </Button>
      </Paper>
    </Container>
  );
};

export default Details;

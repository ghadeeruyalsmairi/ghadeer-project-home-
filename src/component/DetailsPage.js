import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

const DetailsPage = () => {
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
    <Container maxWidth="md">
      <Paper className={classes.container} elevation={3}>
        <Typography variant="h4" className={classes.title}>
          Property Details
        </Typography>
        <Typography variant="h6">
          Bedrooms: {propertyDetails.beds}
        </Typography>
        <Typography variant="h6">
          Bathrooms: {propertyDetails.baths}
        </Typography>
        <Typography variant="h6">
          Price: {propertyDetails.price}
        </Typography>
        <Typography variant="h6">
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
        >
          Buy Now
        </Button>
      </Paper>
    </Container>
  );
};

export default DetailsPage;

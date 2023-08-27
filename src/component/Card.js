import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: theme.spacing(2),
  },
  media: {
    height: 200,
  },
  content: {
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const CardItem = ({ image, title, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent className={classes.content}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          className={classes.button}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardItem;

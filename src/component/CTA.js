import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

const CallToActionButton = ({ label, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      className={classes.button}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CallToActionButton;

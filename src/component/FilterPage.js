import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

const AdvancedFilter = () => {
  const classes = useStyles();
  const [filterData, setFilterData] = useState({
    minPrice: '',
    maxPrice: '',
    minSpace: '',
    maxSpace: '',
    propertyType: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleApplyFilter = () => {
    // Handle the filter logic here
    console.log('Filter data:', filterData);
  };

  return (
    <Container maxWidth="sm">
      <Paper className={classes.container} elevation={3}>
        <Typography variant="h4" className={classes.title}>
          Advanced Filters
        </Typography>
        <form className={classes.form}>
          <TextField
            label="Min Price"
            name="minPrice"
            value={filterData.minPrice}
            onChange={handleFilterChange}
          />
          <TextField
            label="Max Price"
            name="maxPrice"
            value={filterData.maxPrice}
            onChange={handleFilterChange}
          />
          <TextField
            label="Min Space"
            name="minSpace"
            value={filterData.minSpace}
            onChange={handleFilterChange}
          />
          <TextField
            label="Max Space"
            name="maxSpace"
            value={filterData.maxSpace}
            onChange={handleFilterChange}
          />
          <RadioGroup
            name="propertyType"
            value={filterData.propertyType}
            onChange={handleFilterChange}
          >
            <FormControlLabel value="sell" control={<Radio />} label="For Sell" />
            <FormControlLabel value="rent" control={<Radio />} label="For Rent" />
          </RadioGroup>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={handleApplyFilter}
          >
            Apply Filters
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AdvancedFilter;

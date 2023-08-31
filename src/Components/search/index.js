
import React,{useState,useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { TextField,Slider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardContainer from '../CardContainer';
import FormLabel from '@mui/material/FormLabel';
import './style.css';


const HeroSearch = () => {
  const [location, setLocation] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [price, setPrice] = useState([700, 1500]);
  const [housesData, setHousesData] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/DevAyaSodqi/mock-api/house');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setHousesData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    const filteredHouses = housesData.filter((house) =>
      (bedroom === '' || house.bedroom === +bedroom))
      .filter((house) => (bathroom === '' || house.bathroom === +bathroom))
      .filter((house) => (selectedType === '' || house.category === selectedType))
      .filter((house) => house.price >= price[0] && house.price <= price[1])
      .filter((house) => (location === '' || house.location.toLowerCase().includes(location.toLowerCase())));
    setFilteredHouses(filteredHouses);
  };

  const handleResetFilter = () => {
    setLocation('');
    setBedroom('');
    setBathroom('');
    setSelectedType('');
    setPrice([700, 1500]);
    setFilteredHouses([]);
  };

  return (
    <>
      <div
        style={{
          width: '70%',
          margin: '30px auto 300px auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '70%', 
              background: '#F2F6F7', 
            }}
          >
            <InputBase
              sx={{ ml: 5, flex: 1 }}
              placeholder="Search Location"
              inputProps={{ 'aria-label': 'search google maps' }}
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </Paper>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F2F6F7', 
            padding: '20px', 
            marginTop: '20px', 
            marginBottom: '20px', 
          }}
        >
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', width: '100%' }}>
            <FormControl sx={{ minWidth: 120 }}>
              <TextField
                placeholder="Bedroom"
                value={bedroom}
                name="bedroom"
                type="number"
                onChange={(event) => setBedroom(event.target.value)}
                displayEmpty
              />
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <TextField
                placeholder="Bathroom"
                value={bathroom}
                name="bathroom"
                type="number"
                onChange={(event) => setBathroom(event.target.value)}
                displayEmpty
              />
            </FormControl>
            <FormControl>
              <FormLabel style={{ color: '#005555' }}>Select Category:</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedType}
                onChange={(event) => setSelectedType(event.target.value)}
                style={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  flexDirection: 'row',
                }}
              >
                <FormControlLabel value="Apartment" control={<Radio />} label="Apartment" />
                <FormControlLabel value="Roof" control={<Radio />} label="Roof" />
              </RadioGroup>
            </FormControl>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <FormControl>
              <FormLabel style={{ color: '#005555' }}>Price</FormLabel>
              <Slider
                style={{
                  color: '#005555',
                  width: '180px',
                }}
                onChange={(event, newValue) => setPrice(newValue)}
                valueLabelDisplay="auto"
                aria-label="range-slider"
                value={price}
                min={700}
                max={1500}
                step={100}
                valueLabelFormat={(value) => `$${value}`}
                sx={{ color: '#005555' }}
              />
            </FormControl>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            <Button
              variant="contained"
              onClick={handleSearch}
              style={{
                backgroundColor: '#005555',
                color: 'white',
                height: '50px',
                letterSpacing: '1px',
                fontWeight: 'bolder',
                textTransform: 'capitalize',
              }}
            >
              Search
            </Button>
            <Button
              variant="contained"
              onClick={handleResetFilter}
              style={{
                backgroundColor: '#c62828',
                color: 'white',
                height: '50px',
                letterSpacing: '1px',
                fontWeight: 'bolder',
                textTransform: 'capitalize',
              }}
            >
              Reset Filters
            </Button>
          </div>
        </div>

        <div>
          <CardContainer houses={filteredHouses} />
        </div>
      </div>
    </>
  );
};

export default HeroSearch;

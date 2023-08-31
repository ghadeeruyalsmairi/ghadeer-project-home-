import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import style from './style.css';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Details() {
    const { id } = useParams();
    const [house, setHouse] = useState({});

    useEffect(() => {
        async function fetchHouse() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/ghadeeruyalsmairi/api/house/${id}`);
                if (!response.ok) {
                    throw new Error("Network Error");
                }
                const house = await response.json();
                setHouse(house);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHouse();
    }, [id]);

    return (
        <Container maxWidth="lg" style={{ marginTop: '50px' }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img src={house.url} alt="House" style={{ width: '70%', height: '400px' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" className="title" style={{ color: '#000', fontWeight: 'bold', letterSpacing: '1.5px' }}>
                        {house.title}
                    </Typography>
                    <div className="description">
                        <Typography variant="subtitle1" className="subtitle">
                            {house.description}
                        </Typography>
                        <AttachMoneyIcon style={{ fontSize: '20px', marginRight: '5px', color:'#FF664B' }} />{house.price}
                    </div>
                    <div className="icons" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 'auto' }}>
                        <div className="icon" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                            <LocalHotelIcon style={{ fontSize: '20px', marginRight: '5px',color:'#FF664B'}} />
                            <Typography variant="subtitle1" style={{ fontSize: '18px' }}>{house.bedroom}</Typography>
                        </div>
                        <div className="icon" style={{ display: 'flex', alignItems: 'center' }}>
                            <BathtubIcon style={{ fontSize: '20px', marginRight: '5px',color:'#FF664B' }} />
                            <Typography variant="subtitle1" style={{ fontSize: '18px' }}>{house.bathroom}</Typography>
                        </div>
                    </div>
                    <div className='contact' style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
                            <PlaceIcon style={{ fontSize: '20px', marginRight: '5px',color: '#FF664B'}} />{house.address}
                  
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
                        
                            <PhoneIcon style={{ fontSize: '20px', color: '#FF664B', marginRight: '5px' }} /> 
                            <Typography variant="subtitle1" style={{ fontSize: '18px', margin: '0',color: '#000' }}>0593943943</Typography>
                        </span>
                        
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon style={{ fontSize: '20px', color: '#FF664B', marginRight: '5px' }} /> 
                            <Typography variant="subtitle1" style={{ fontSize: '18px', margin: '0',color: '#000' }}>Househunting@gmail.com</Typography>
                        </span>
                    </div>
                </Grid>
            </Grid>
        </Container>

       
    );
}

export default Details;

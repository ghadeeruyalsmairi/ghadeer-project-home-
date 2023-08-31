import React, { useEffect, useState } from 'react';
import CardContainer from '../../Components/CardContainer';
import Typography from '@mui/material/Typography';
import { Hero } from '../../Components';
import PropertySearch from '../../Components/search';
import HeroSearch from "../../Components/search";


const Landing = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ghadeeruyalsmairi/api/house')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('ERROR', error));
    }, []);
   
    return (
        
        <>
                <Hero/>                
                <HeroSearch />
               
                <Typography variant="h4" align="center" gutterBottom style={
                {
                    paddingTop: '30px',
                    fontWeight: 'bold',
                    color:'#000',
                }
            }>
            Featured Listing</Typography>
           
            {console.log(data, 'houses')}
            <CardContainer houses={data} />
            <CardContainer houses={data} />

        </>
    );
}
export default Landing;
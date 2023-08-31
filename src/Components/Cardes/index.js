import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, colors } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { Link } from 'react-router-dom';

import style from './style.css';

export default function HouseCard({ house }) {
    const [liked, setLiked] = React.useState(false);
    const { id, url, address, price, description, bedroom, bathroom, title, type } = house;

    const handleLikeToggle = () => {
        setLiked(!liked);
    };

    return (
    <div className="cardContainer">
      <Card sx={{ maxWidth: 320 }} className="imgCard">
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            width="100%"
            image={url}
            alt="House"
          />
          <FavoriteIcon
            className="favoriteIcon"
            sx={{
               color: liked ? 'red' : 'white', 
               position: 'absolute',
               top: '13px',
               right: '17px',
               zIndex: 1,
               fontSize: '30px'
                 }}
            onClick={handleLikeToggle}   
           />
          <CardContent className="cardContent">
            <Typography variant="h6" color="textPrimary" gutterBottom className="title">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom className="description">
              {description.slice(0, 100)}
            </Typography>
            <div className="infoContainer">
              <div className="icon">
                <AddLocationAltIcon className="locationIcon" />
                {address}
              </div>
              <div className="iconDivider"></div>
              <div className="icon">
                <AttachMoneyIcon className="moneyIcon" />
                {price}
              </div>
            </div>
            <div className="icon">
              <LocalHotelIcon className="bedroomIcon" />
              {bedroom}
              <div className="iconDivider"></div>
              <BathtubIcon className="bathroomIcon" />
              <span>{bathroom}</span>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/Details/${id}`} className="detailsLink"style={{
                        backgroundColor: '#FF664B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontFamily: 'Nunito Sans',
                        fontSize: '18px',
                        textDecoration: 'none',
                        width: '100%',
                        height: '30px',
                        color:'white'
                    }}>
            More Details
          </Link>
        </CardActions>
      </Card>
    </div>
    );
}

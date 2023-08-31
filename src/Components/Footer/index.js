import React from "react";
import logo from '../Utilis/images/logo.png';
import { Typography, Link, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import './style.css'

const pages = ['Home', 'About Us','Contact us','featuredListing'];
const settings = ['My Favorite', 'Add House', 'My Houses','Filter'];
const featuredLinks = ['Profile', 'SignIn',, 'SignUp','Logout'];
function Footer() {
    return (
        <footer className="footer">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    {}
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="Logo" />

                        <Typography variant="h6" className="footer-heading">
                        Home Hunting platform, your ultimate destination to find the perfect living space.
                        </Typography> 
                        <div className="social-icons">
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                    {}
                    <div className="footer-section">
                        <Typography variant="h6" className="footer-heading">
                        Company
                        </Typography>
                        <ul className="footer-list">
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <Link href="#">{page}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                    {}
                    <div className="footer-section">
                        <Typography variant="h6" className="footer-heading">
                        Services 
                       </Typography>
                        <ul className="footer-list">
                            {settings.map((page, index) => (
                                <li key={index}>
                                    <Link href="#">{page}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {}
                    <div className="footer-section">
                        <Typography variant="h6" className="footer-heading">
                        Customer Care                        </Typography>
                        <ul className="footer-list">
                            {featuredLinks.map((page, index) => (
                                <li key={index}>
                                    <Link href="#">{page}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Grid>
            </Grid>

            <Typography variant="body2" align="center" className="copyright">
                &copy; {new Date().getFullYear()} GHadeerAL-smairi2023
            </Typography>
        </footer>
    );
}

export default Footer;

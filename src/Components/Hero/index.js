import React from "react";
import Box from "@mui/material/Box";
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import imageHero from '../../Components/Hero/hero-img.jpg'


function Hero() {

    const navigate = useNavigate();
    function navToSearch(){
        navigate('/Filter');
    }
    return (
       

    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Find Your<span>Dream House</span></h1>
        <h1  className="hero-title">By Us</h1>
        <div className="line"></div>
        <p className="hero-para">Welcome to our Home Hunting platform, your ultimate destination to find the perfect living space. Explore a diverse range of properties, including apartments, houses, and more. Whether you're looking to buy or rent, we offer a comprehensive selection to match your unique preferences. Start your journey today and discover the ideal home that suits your lifestyle.</p>
        <button className="hero-cta-btn">Make An Enquiry</button>
      </div>
      <div className="hero-image">
        <img src={imageHero} alt="Hero" />
      </div>
    </div>
  

    );
}

export default Hero;

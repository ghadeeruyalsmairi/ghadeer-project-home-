import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import Navbar from './component/NavBar';
import Home from './Pages/Home'; 
import Footer from './component/Footer'; 
import RegistrationForm from './component/RegistrationForm';
import HeroSection from './component/HeroSection'; 
import CardItem from './component/Card';
import CallToActionButton from './component/CTA'; 
import DetailsPage from './component/DetailsPage';
import ErrorPage from './component/ErrorPage';
import AdvancedFilter from './component/FilterPage';
import theme from './theme';

const App = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Modern Apartment',
      description: 'Spacious apartment with stunning city views.',
      image: '/image1.jpg',
    },
    {
      id: 2,
      title: 'Cozy Cottage',
      description: 'Charming cottage nestled in a peaceful countryside.',
      image: '/image2.jpg',
    },
    {
      id: 3,
      title: 'Luxury Villa',
      description: 'Elegant villa with a private pool and beautiful garden.',
      image: '/image3.jpg',
    },
    {
      id: 4,
      title: 'Beach House',
      description: 'Relaxing beachfront house with direct access to the ocean.',
      image: '/image4.jpg',
    },
  ];
  const handleCTAClick = () => {
    History.push('./component/FilterPage.js');  };
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/hero" component={HeroSection} /> 
        <Route path="/details/:id" component={DetailsPage} /> 
        <Route path="/error" component={ErrorPage} /> 
        <Route component={ErrorPage} />
        <Route path="/filter" component={AdvancedFilter}/>
      </Routes>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cardsData.map((card) => (
          <CardItem
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
      <CallToActionButton label="Learn More" onClick={handleCTAClick} /> {/* Add CTA button */}
      <Footer />
    </Router>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import { Layout, Landing, Details,AboutUs,Notfound,Filter} from '../Pages';
import { Route, Routes } from 'react-router-dom';
import PropertySearch from '../Components/search';
import SignUp from '../Pages/SignUp';
import Addhome from '../Pages/AddHome'
// import SignIn from '../Pages/SignIn';
import MyHouses from '../Pages/MyHouses';
import MyFavarute from '../Pages/MyFavarute';
import Cart from '../Pages/Cart';
import Profile from '../Pages/Profile'
function App() {
  return (
    
    <Layout className="App">
      {}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Details/:id" element={<Details/>} />
        <Route path="/AboutUs/" element={<AboutUs/>} />
        <Route path="/Addhome/" element={<Addhome/>} />
        <Route path="/Profile/" element={<Profile/>} />
        <Route path="/SignUp/" element={<SignUp/>} />
        <Route path="/Cart/" element={<Cart/>} />
        <Route path="/MyHouses/" element={<MyHouses/>} />
        <Route path="/MyFavarute/" element={<MyFavarute/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path="/Filter" element={<Filter/>} />
        <Route path="../Components/search" element={<PropertySearch/>} />

      </Routes>
  
    </Layout>
  );
}

export default App
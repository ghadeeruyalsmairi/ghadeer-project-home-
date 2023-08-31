import { useState, useEffect } from "react";
import './style.css';

import HouseImage1 from '../../Components/Utilis/images/img3.jpg';
import HouseImage2 from '../../Components/Utilis/images/img4.jpg'; 
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoNotDisturbOutlinedIcon from '@mui/icons-material/DoNotDisturbOutlined';
function MyHouses() {
  const houses = [
    { id: 1, image: HouseImage1, location: 'gaza' },
    { id: 2, image: HouseImage2, location: 'rafah' },
  ];

  const handleEdit = (houseId) => {
    console.log(`Edit house with ID ${houseId}`);
  };

  const handleDelete = (houseId) => {
    console.log(`Delete house with ID ${houseId}`);
  };

  return (
    <div className="my-houses-container">
      <h1>My Houses</h1>
      <table>
        <thead>
          <tr>
            <th>House Image</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <tr key={house.id}>
              <td>
                <img src={house.image} alt={`House ${house.id}`} className="house-image" />
              </td>
              <td>{house.location}</td>
              <td>
                <span className="material-icons edit-icon" onClick={() => handleEdit(house.id)}>
                  <EditOutlinedIcon/>
                </span>
                <span className="material-icons delete-icon" onClick={() => handleDelete(house.id)}>
                  <DoNotDisturbOutlinedIcon/>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="hero-cta-btn">Save</button>
    </div>
  );
}

export default MyHouses;
import { useState, useEffect } from "react";
import './style.css';


function AddHomeForm() {
  const [homeData, setHomeData] = useState({
    homeName: '',
    homePrice: '',
    homeLocation: '',
    homeArea: '',
    homeDetails: '',
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHomeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    console.log(homeData); // You can perform save or submission logic here
  };

  return (
    <div className="add-home-container">
      <h1>Add Home</h1>
      <div className="home-form">
        <h2>Home Details</h2>
        <div className="input-group">
          <input
            type="text"
            name="homeName"
            placeholder="Home Name"
            value={homeData.homeName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="homePrice"
            placeholder="Home Price"
            value={homeData.homePrice}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="homeLocation"
            placeholder="Home Location"
            value={homeData.homeLocation}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="homeArea"
            placeholder="Home Area"
            value={homeData.homeArea}
            onChange={handleInputChange}
          />
          <textarea
            name="homeDetails"
            placeholder="More Details"
            value={homeData.homeDetails}
            onChange={handleInputChange}
          />
        </div>

        <h2>Owner Details</h2>
        <div className="input-group">
          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={homeData.ownerName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="ownerEmail"
            placeholder="Owner Email"
            value={homeData.ownerEmail}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="ownerPhone"
            placeholder="Owner Phone"
            value={homeData.ownerPhone}
            onChange={handleInputChange}
          />
        </div>

        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default AddHomeForm;

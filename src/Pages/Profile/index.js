import { useState, useEffect } from "react";
import './style.css';
import ProfileImage from '../../Components/Utilis/images/profile.jpg';
function Profile() {


  const initialUser = {
    name: 'Ghadeer',
    email: 'ghadeer@gmail.com',
    phone: '123-456-7890',
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <div className="user-profile">
        <div className="profile-image">
          <img src={ProfileImage} alt="Profile" />
        </div>
        <div className="profile-details">
          <div className="detail">
            <label>Name:</label>
            {isEditing ? (
              <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            ) : (
              <span>{user.name}</span>
            )}
          </div>
          <div className="detail">
            <label>Email:</label>
            {isEditing ? (
              <input type="text" name="email" value={user.email} onChange={handleInputChange} />
            ) : (
              <span>{user.email}</span>
            )}
          </div>
          <div className="detail">
            <label>Phone:</label>
            {isEditing ? (
              <input type="text" name="phone" value={user.phone} onChange={handleInputChange} />
            ) : (
              <span>{user.phone}</span>
            )}
          </div>
        </div>
        <div className="actions">
          {isEditing ? (
            <button className="save-button" onClick={handleSave}>Save</button>
          ) : (
            <button className="edit-button" onClick={handleEdit}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}



export default Profile;
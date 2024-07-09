// EditProfile.js
import React, { useState } from 'react';
import './EditProfile.scss';

const EditProfile = ({ user, onUpdate }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedUser);
  };

  return (
    <div className="edit-profile-container">
      <form className="edit-profile" onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={editedUser.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Birth Date</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={editedUser.birthDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthPlace">Birth Place</label>
            <input
              type="text"
              id="birthPlace"
              name="birthPlace"
              value={editedUser.birthPlace}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={editedUser.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={editedUser.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group full-width">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={editedUser.bio}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;

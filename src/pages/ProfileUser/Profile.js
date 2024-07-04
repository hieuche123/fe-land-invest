// App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar.js';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import './Profile.scss';
import { ViewProfileUser } from '../../services/api.js';
import { message, notification } from 'antd';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [activeView, setActiveView] = useState('view');
  const userredux = useSelector((state) => state.account.Users);
console.log("userredux", userredux);
  const [user, setUser] = useState({
    avatar: 'https://example.com/avatar.jpg',
    fullName: 'John Doe',
    bio: 'Passionate developer and tech enthusiast',
    email: 'john.doe@example.com',
    birthDate: '1990-01-01',
    birthPlace: 'New York, USA',
    gender: 'Male',
    phone: '+1 234 567 890'
  });


const getViewProfileUser = async (userID) => {
    let res = await ViewProfileUser(userID);
    res.headers= {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
    if (res) {  
        
        message.success('Thêm mới group thành công');
        setUser();
    } else {
        notification.error({
            message: 'Đã có lỗi xảy ra',
            description: res.message
        })
    }
}
  const handleProfileUpdate = (updatedUser) => {
    setUser(updatedUser);
    setActiveView('view');
  };

  return (
    <>
        <div className="profile">
          <Sidebar activeView={activeView} setActiveView={setActiveView} />
          <div className="main-content">
            {activeView === 'view' ? (
              <UserProfile user={user} />
            ) : (
              <EditProfile user={user} onUpdate={handleProfileUpdate} />
            )}
          </div>
        </div>
    </>
  );
};

export default Profile;
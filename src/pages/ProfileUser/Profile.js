// App.js
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar.js';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import './Profile.scss';
import { ViewProfileUser } from '../../services/api.js';
import { message, notification } from 'antd';
import { useSelector } from 'react-redux';
import anh from '../../../src/assets/channels4_profile.jpg'
const Profile = () => {
  const [activeView, setActiveView] = useState('view');
  const datauser = useSelector(state => state.account.dataUser);
  const userredux = useSelector((state) => state.account.Users);
console.log("userredux", userredux);
console.log("data user", datauser);
  const [user, setUser] = useState({
    avatar: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/279721342_1291145041644360_2903220512456397091_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_CfZidW9XHgQ7kNvgHvOT7a&_nc_ht=scontent.fhan17-1.fna&oh=00_AYACwRltElqqKl5qnlUdHqE_mkxnr0_1vWU0isfRKoGdFA&oe=6692C81B',
    fullName: 'Le Văn Hiểu',
    bio: 'Passionate developer and tech enthusiast',
    email: 'levanhieu12112002@gmail.com',
    birthDate: '12/11/2002',
    birthPlace: 'Dinh Cong = Ha Noi',
    gender: 'Nam',
    phone: '0984463225'
  });

useEffect(()=>{
  getViewProfileUser();
},[])
const getViewProfileUser = async () => {
    let res = await ViewProfileUser(datauser.UserID);
    res.headers= {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
    if (res) {  
        console.log("data user res", res);
        //setUser();
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
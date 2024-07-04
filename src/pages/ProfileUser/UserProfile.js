import React from 'react';
import './UserProfile.scss';
import Header from '../../components/Header/Header';

const UserProfile = () => {

const user = {
    avatar: 'https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/279721342_1291145041644360_2903220512456397091_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5uf-o8sUvmIQ7kNvgEvR6pd&_nc_ht=scontent.fhan5-6.fna&oh=00_AYA2WLDYPdUr6NVf4xVLK8DiIvho880cwc_eV34vvo_CLA&oe=66867A1B',
    fullName: 'Hiểu Chể',
    bio: 'Passionate developer and tech enthusiast',
    email: 'john.doe@example.com',
    birthDate: '2002-01-01',
    birthPlace: 'Hoàng Mai - Hà Nội',
    gender: 'Male',
    phone: '0383 481 134'
    };
  return (
    <>
        <div className="user-profile">
          <div className="profile-header">
            <img src={user.avatar} alt="User Avatar" className="avatar" />
            <h1 className="full-name">{user.fullName}</h1>
          </div>
          <div className="profile-content">
            <div className="bio">{user.bio}</div>
            <div className="info-grid">
              <InfoItem label="Email" value={user.email} icon="📧" />
              <InfoItem label="Ngày sinh" value={user.birthDate} icon="🎂" />
              <InfoItem label="Địa chỉ" value={user.birthPlace} icon="🏠" />
              <InfoItem label="Giới tính" value={user.gender} icon="⚧" />
              <InfoItem label="Điện thoại" value={user.phone} icon="📱" />
            </div>
          </div>
        </div>
    </>
  );
};

const InfoItem = ({ label, value, icon }) => (
  <div className="info-item">
    <span className="icon">{icon}</span>
    <span className="label">{label}:</span>
    <span className="value">{value}</span>
  </div>
);

export default UserProfile;
import React from 'react';
import './UserProfile.scss';
import Header from '../../components/Header/Header';

const UserProfile = () => {

const user = {
    avatar: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/279721342_1291145041644360_2903220512456397091_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_CfZidW9XHgQ7kNvgHvOT7a&_nc_ht=scontent.fhan17-1.fna&oh=00_AYACwRltElqqKl5qnlUdHqE_mkxnr0_1vWU0isfRKoGdFA&oe=6692C81B',
    fullName: 'Hiểu Chể',
    bio: 'Passionate developer and tech enthusiast',
    email: 'john.doe@example.com',
    birthDate: '2002-01-01',
    birthPlace: 'Hoàng Mai - Hà Nộii',
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
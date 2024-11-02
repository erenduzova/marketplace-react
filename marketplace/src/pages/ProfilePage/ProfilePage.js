import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./ProfilePage.css"


const ProfilePage = () => {
  // State to hold user information
  const [userInfo, setUserInfo] = useState({
    name: 'Mevcut İsminiz',
    surname: 'Mevcut Soyisminiz',
    email: 'mevcut.email@adresiniz.com',
    // phone: '' // Uncomment if you decide to include phone number
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update user information (e.g., API call)
    console.log('Updated User Info:', userInfo);
  };

  // Handle account deletion
  const handleDeleteAccount = () => {
    // Logic to delete the account (e.g., API call)
    console.log('Account Deleted');
  };

  return (
    <>
        <Navbar /> {/* Navbar'ı burada gösteriyoruz */}
    <div>
      {/* Profile Header */}
      <div className="profile-header">
        <h1>Hoşgeldiniz, {userInfo.name} {userInfo.surname}!</h1>
        <p>Burada bilgilerinizi görüntüleyebilir ve güncelleyebilirsiniz.</p>
      </div>

      {/* Profile Content */}
      <div className="container profile-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">İsim:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Soyisim:</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              value={userInfo.surname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-posta Adresiniz:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          {/* Uncomment if you want to include phone input
          <div className="form-group">
            <label htmlFor="phone">Telefon Numaranız:</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Telefon Numaranız"
              required
              maxLength="10"
              pattern="\d*"
              title="Lütfen sadece rakam giriniz"
              onChange={handleChange}
            />
          </div>
          */}

          {/* Button Group */}
          <div className="button-group">
            <button type="submit" className="btn btn-update">Bilgileri Güncelle</button>
            <button type="button" className="btn btn-delete" onClick={handleDeleteAccount}>Hesabı Sil</button>
          </div>
        </form>
      </div>
    </div>
    <Footer /> {/* Footer'ı burada gösteriyoruz */}
    </>
  );
};

export default ProfilePage;

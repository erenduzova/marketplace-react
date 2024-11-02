import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./StoreProfilePage.css"

const StoreProfilePage = () => {
    const [storeInfo, setStoreInfo] = useState({
        storeName: '',
        phone: '',
        taxNumber: '',
        storeDesc: '',
        storeAddress: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setStoreInfo({ ...storeInfo, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle form submission (e.g., API call)
        console.log("Store information submitted:", storeInfo);
    };

    return (
        <>
        <Navbar /> {/* Navbar'ı burada gösteriyoruz */}
        <div>
            {/* Profile Header */}
            <div className="storeprofile-header">
                <h1>Hoşgeldiniz, Kullanıcı Adı!</h1>
                <p>Mağaza bilgilerinizi ekleyin veya güncelleyin.</p>
                <button className="btn-Store btn-Store-primary" id="addStoreBtn">Mağaza Ekle</button>
            </div>

            {/* Profile Content */}
            <div className="store-container" id="storeFormContainer">
                <h2>Mağaza Bilgileri</h2>
                <form id="storeForm" onSubmit={handleSubmit}>
                    <div className="store-form-group">
                        <label htmlFor="storeName">Mağaza Adı:</label>
                        <input
                            type="text"
                            className="store-form-control"
                            id="storeName"
                            placeholder="Mağaza Adı"
                            required
                            value={storeInfo.storeName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="store-form-group">
                        <label htmlFor="phone">Telefon Numarası:</label>
                        <input
                            type="text"
                            className="store-form-control"
                            id="phone"
                            placeholder="Telefon Numarası"
                            required
                            maxLength="10"
                            pattern="\d*"
                            title="Lütfen sadece rakam giriniz."
                            value={storeInfo.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="store-form-group">
                        <label htmlFor="taxNumber">Vergi Numarası:</label>
                        <input
                            type="text"
                            className="store-form-control"
                            id="taxNumber"
                            placeholder="Vergi Numarası"
                            required
                            maxLength="10"
                            pattern="\d*"
                            title="Lütfen sadece rakam giriniz."
                            value={storeInfo.taxNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="store-form-group">
                        <label htmlFor="storeDesc">Mağaza Açıklaması:</label>
                        <textarea
                            className="store-form-control"
                            id="storeDesc"
                            rows="3"
                            placeholder="Mağaza Açıklaması"
                            required
                            value={storeInfo.storeDesc}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="store-form-group">
                        <label htmlFor="storeAddress">Mağaza Adresi:</label>
                        <input
                            type="text"
                            className="store-form-control"
                            id="storeAddress"
                            placeholder="Mağaza Adresi"
                            required
                            value={storeInfo.storeAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn-Store btn-Store-primary">Kaydet</button>
                </form>
            </div>

            {/* Store Info Display */}
            <div className="store-container store-info" id="storeInfo">
                <h3>Mağaza Bilgileri:</h3>
                <p><strong>Mağaza Adı:</strong> <span id="displayStoreName">{storeInfo.storeName}</span></p>
                <p><strong>Telefon Numarası:</strong> <span id="displayPhone">{storeInfo.phone}</span></p>
                <p><strong>Vergi Numarası:</strong> <span id="displayTaxNumber">{storeInfo.taxNumber}</span></p>
                <p><strong>Mağaza Açıklaması:</strong> <span id="displayStoreDesc">{storeInfo.storeDesc}</span></p>
                <p><strong>Mağaza Adresi:</strong> <span id="displayStoreAddress">{storeInfo.storeAddress}</span></p>
                <button className="btn-Store btn-Store-update" id="updateStoreBtn">Güncelle</button>
            </div>
        </div>
        <Footer /> {/* Footer'ı burada gösteriyoruz */}
        </>
    );
};


export default StoreProfilePage;

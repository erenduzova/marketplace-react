
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './EfaturaPage.css';

const EfaturaPage = () => {
    const [formData, setFormData] = useState({
        ettin: '',
        receiverName: '',
        invoiceDate: '',
        status: 'all',
        invoiceType: 'all',
        marketplace: 'all',
        storeName: 'store1'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search Data:', formData);
    };

    return (
        <>
            <Navbar />
            <div className="fatura-content-container">
                <h2 className="fatura-text-center">E-Fatura Yönetimi</h2>
                <div className="fatura-search-section mb-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="col-md-4">
                                <label htmlFor="ettin">ETTN:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ettin"
                                    name="ettin"
                                    value={formData.ettin}
                                    onChange={handleChange}
                                    placeholder="ETTN girin"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="receiverName">Alıcı Adı:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="receiverName"
                                    name="receiverName"
                                    value={formData.receiverName}
                                    onChange={handleChange}
                                    placeholder="Alıcı Adı girin"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="invoiceDate">Fatura Tarihi:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="invoiceDate"
                                    name="invoiceDate"
                                    value={formData.invoiceDate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4">
                                <label htmlFor="status">Durum:</label>
                                <select
                                    className="form-control"
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="all">Tümü</option>
                                    <option value="approved">Onaylı</option>
                                    <option value="pending">Beklemede</option>
                                    <option value="rejected">Reddedildi</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="invoiceType">Fatura Türü:</label>
                                <select
                                    className="form-control"
                                    id="invoiceType"
                                    name="invoiceType"
                                    value={formData.invoiceType}
                                    onChange={handleChange}
                                >
                                    <option value="all">Tümü</option>
                                    <option value="e-invoice">E-Fatura</option>
                                    <option value="e-archive">E-Arşiv</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="marketplace">Pazar Yeri:</label>
                                <select
                                    className="form-control"
                                    id="marketplace"
                                    name="marketplace"
                                    value={formData.marketplace}
                                    onChange={handleChange}
                                >
                                    <option value="all">Tümü</option>
                                    <option value="trendyol">Trendyol</option>
                                    <option value="hepsiburada">Hepsiburada</option>
                                    <option value="n11">N11</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4">
                                <label htmlFor="storeName">Mağaza Adı:</label>
                                <select
                                    className="form-control"
                                    id="storeName"
                                    name="storeName"
                                    value={formData.storeName}
                                    onChange={handleChange}
                                >
                                    <option value="store1">Mağaza 1</option>
                                    <option value="store2">Mağaza 2</option>
                                    <option value="store3">Mağaza 3</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="fatura-btn-primary btn btn-block">Ara</button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Fatura Tablosu */}
                <div className="fatura-table-responsive">
                    <table className="fatura-table table-hover">
                        <thead>
                            <tr>
                                <th>ETTN</th>
                                <th>Fatura Tarihi</th>
                                <th>Alıcı Adı</th>
                                <th>Tutar</th>
                                <th>KDV</th>
                                <th>Genel Toplam</th>
                                <th>Durum</th>
                                <th>Fatura Türü</th>
                                <th>İşlem Türü</th>
                                <th>Pazar Yeri</th>
                                <th>Mağaza Adı</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>INV202409261</td>
                                <td>26/09/2024</td>
                                <td>John Doe</td>
                                <td>500.00</td>
                                <td>90.00</td>
                                <td>590.00</td>
                                <td>Onaylı</td>
                                <td>E-Fatura</td>
                                <td>Satış</td>
                                <td>Trendyol</td>
                                <td>Mağaza 1</td>
                                <td>
                                    <div className="fatura-action-buttons">
                                        <button className="fatura-btn-primary btn btn-sm">Görüntüle</button>
                                        <button className="fatura-btn-success btn btn-sm">Onayla</button>
                                        <button className="fatura-btn-danger btn btn-sm">Reddet</button>
                                        <button className="fatura-btn-secondary btn btn-sm">Loglar</button>
                                        <button className="fatura-btn-info btn btn-sm">PDF</button>
                                        <button className="fatura-btn-warning btn btn-sm">Excel</button>
                                        <button className="fatura-btn-dark btn btn-sm">Rapor</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EfaturaPage;

import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./SalesManagementPage.css"
const SalesManagementPage = () => {
    const salesData = [
        {
            productName: "Ürün 1",
            category: "Kategori A",
            salesCount: 50,
            unitPrice: 200,
            vatRate: 18,
            totalAmount: 11800,
            profitLoss: "Kar",
            returnRate: 5,
            marketplace: "Trendyol",
            salesTrend: "En çok satılan zaman: Ağustos 2024",
            campaignSuggestion: true
        },
        {
            productName: "Ürün 2",
            category: "Kategori B",
            salesCount: 20,
            unitPrice: 150,
            vatRate: 18,
            totalAmount: 3540,
            profitLoss: "Zarar",
            returnRate: 12,
            marketplace: "Trendyol",
            salesTrend: "En az satılan zaman: Temmuz 2024",
            campaignSuggestion: true
        }
    ];

    return (
        <>
        <Navbar /> {/* Navbar'ı burada gösteriyoruz */}
        <div className="content-container">
            <h3 className="text-center mb-4">Satış Yönetimi</h3>
            <div className="table-responsive">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Ürün Adı</th>
                            <th>Kategori</th>
                            <th>Satış Adedi</th>
                            <th>Birim Fiyatı</th>
                            <th>KDV Oranı</th>
                            <th>Genel Toplam</th>
                            <th>Kar/Zarar Durumu</th>
                            <th>İade Oranı</th>
                            <th>Pazar Yeri</th>
                            <th>Satış Trendi</th>
                            <th>Kampanya Önerisi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.productName}</td>
                                <td>{item.category}</td>
                                <td>{item.salesCount}</td>
                                <td>{item.unitPrice} TL</td>
                                <td>%{item.vatRate}</td>
                                <td>{item.totalAmount.toLocaleString()} TL</td>
                                <td className={item.profitLoss === "Kar" ? "text-success" : "text-danger"}>
                                    {item.profitLoss}
                                </td>
                                <td>%{item.returnRate}</td>
                                <td>{item.marketplace}</td>
                                <td>{item.salesTrend}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm">Kampanya Oluştur</button>
                                </td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer /> {/* Footer'ı burada gösteriyoruz */}
      </>
    );
};

export default SalesManagementPage;

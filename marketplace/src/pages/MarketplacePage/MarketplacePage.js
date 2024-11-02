// src/Marketplace.js
import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./MarketplacePage.css";

function MarketplacePage() {
  return (
    <>
      <Navbar /> {/* Navbar'ı burada gösteriyoruz */}

      <section className="marketplace marketplace-section">
        <div className="marketplace container">
          <h2 className="management-title">Trendyol Ürün Yönetimi</h2>
          <div className="marketplace table-responsive">
            <table className="marketplace table">
              <thead>
                <tr>
                  <th>Ürün Adı</th>
                  <th>Kategori</th>
                  <th>Özellikler</th>
                  <th>Satış Adedi</th>
                  <th>Fiyat</th>
                  <th>KDV Oranı</th>
                  <th>Sipariş Durumu</th>
                  <th>Kalan Stok</th>
                  <th>Aksiyonlar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Örnek Ürün 1</td>
                  <td>Kategori 1</td>
                  <td>Özellik 1, Özellik 2</td>
                  <td>25</td>
                  <td>150 TL</td>
                  <td>%18</td>
                  <td>Onaylandı</td>
                  <td>50</td>
                  <td>
                    <a href="#" className="marketplace btn-marketplace">Fiyat/KDV Güncelle</a>
                  </td>
                </tr>
                {/* Diğer ürün satırları eklenebilir */}
              </tbody>
            </table>
          </div>
          <a href="https://www.trendyol.com" target="_blank" rel="noopener noreferrer" className="marketplace btn-marketplace mt-4">
            Trendyol'a Git
          </a>
        </div>

        <div className="marketplace container mt-5">
          <h2 className="management-title">Hepsiburada Ürün Yönetimi</h2>
          <div className="marketplace table-responsive">
            <table className="marketplace table">
              <thead>
                <tr>
                  <th>Ürün Adı</th>
                  <th>Kategori</th>
                  <th>Özellikler</th>
                  <th>Satış Adedi</th>
                  <th>Fiyat</th>
                  <th>KDV Oranı</th>
                  <th>Sipariş Durumu</th>
                  <th>Kalan Stok</th>
                  <th>Aksiyonlar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Örnek Ürün 2</td>
                  <td>Kategori 2</td>
                  <td>Özellik 3, Özellik 4</td>
                  <td>10</td>
                  <td>200 TL</td>
                  <td>%18</td>
                  <td>Kargoya Verildi</td>
                  <td>20</td>
                  <td>
                    <a href="#" className="marketplace btn-marketplace">Fiyat/KDV Güncelle</a>
                  </td>
                </tr>
                {/* Diğer ürün satırları eklenebilir */}
              </tbody>
            </table>
          </div>
          <a href="https://www.hepsiburada.com" target="_blank" rel="noopener noreferrer" className="marketplace btn-marketplace mt-4">
            Hepsiburada'ya Git
          </a>
        </div>

        <div className="marketplace container mt-5">
          <h2 className="management-title">N11 Ürün Yönetimi</h2>
          <div className="marketplace table-responsive">
            <table className="marketplace table">
              <thead>
                <tr>
                  <th>Ürün Adı</th>
                  <th>Kategori</th>
                  <th>Özellikler</th>
                  <th>Satış Adedi</th>
                  <th>Fiyat</th>
                  <th>KDV Oranı</th>
                  <th>Sipariş Durumu</th>
                  <th>Kalan Stok</th>
                  <th>Aksiyonlar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Örnek Ürün 3</td>
                  <td>Kategori 3</td>
                  <td>Özellik 5, Özellik 6</td>
                  <td>30</td>
                  <td>300 TL</td>
                  <td>%18</td>
                  <td>Teslim Edildi</td>
                  <td>15</td>
                  <td>
                    <a href="#" className="marketplace btn-marketplace">Fiyat/KDV Güncelle</a>
                  </td>
                </tr>
                {/* Diğer ürün satırları eklenebilir */}
              </tbody>
            </table>
          </div>
          <a href="https://www.n11.com" target="_blank" rel="noopener noreferrer" className="marketplace btn-marketplace mt-4">
            N11'e Git
          </a>
        </div>
      </section>
      
      <Footer /> {/* Footer'ı burada gösteriyoruz */}
    </>
  );
}

export default MarketplacePage;

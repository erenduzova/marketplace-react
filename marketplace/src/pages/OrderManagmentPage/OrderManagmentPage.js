import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./OrderManagmentPage.css";


function OrderManagmentPage() 
{
    return (
      <>
    <Navbar /> {/* Navbar'ı burada gösteriyoruz */}
    <div className="productTable-content-container">
      <div className="table-responsive">
        <table className="productTable-table table-hover">
          <thead>
            <tr>
              <th>Ürün Adı</th>
              <th>Kategori</th>
              <th>Özellikler</th>
              <th>Satış Adedi</th>
              <th>Fiyat</th>
              <th>KDV Oranı</th>
              <th>Sipariş Durumu</th>
              <th>Sipariş Adresi</th>
              <th>Kargo Durumu</th>
              <th>Müşteri Telefonu</th>
              <th>İptal</th>
              <th>İade</th>
            </tr>
          </thead>
          <tbody>
            {/* Örnek Veri */}
            <tr>
              <td>Ürün 1</td>
              <td>Kategori A</td>
              <td>Renk: Kırmızı, Boyut: M</td>
              <td>10</td>
              <td>100 TL</td>
              <td>%18</td>
              <td>Stokta Var</td>
              <td>İstanbul</td>
              <td>Kargoya Verildi</td>
              <td>0555 555 55 55</td>
              <td><button className="productTable-btn productTable-btn-danger">İptal Et</button></td>
              <td><button className="productTable-btn productTable-btn-warning">İade Al</button></td>
            </tr>
            {/* Daha fazla veri buraya eklenebilir */}
          </tbody>
        </table>
      </div>
    </div>

        <Footer /> {/* Footer'ı burada gösteriyoruz */}
        </> );
  }
  
 
  
export default OrderManagmentPage;
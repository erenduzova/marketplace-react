import React, { useState } from "react";
import "./ProductsSectionPage.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ProductsSectionPage = () => {
  // Ürün listesi için bir örnek state
  const [products, setProducts] = useState([
    {
      name: "Örnek Ürün",
      code: "50URF",
      stock: 20,
      price: 100,
      description: "Bu bir örnek üründür.",
      brand: "Samsung",
      category: "Elektronik",
    },
  ]);

  // Yeni ürün ekleme modali için state
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    stock: "",
    price: "",
    description: "",
    brand: "",
    category: "Elektronik",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setShowModal(false); // Modalı kapat
    setNewProduct({
      name: "",
      stock: "",
      price: "",
      description: "",
      brand: "",
      category: "Elektronik",
    });
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1); // Ürünü sil
    setProducts(updatedProducts);
  };

  return (
    <>
      <Navbar /> {/* Navbar'ı burada gösteriyoruz */}
      <section className="product-section">
        <div className="product-container">
          <h2>Depodaki Ürünleriniz</h2>

          {/* Ürün Ekle Butonu */}
          <button
            className="product-btn-add"
            onClick={() => setShowModal(true)}
          >
            Ürün Ekle
          </button>

          {/* Ürün Tablosu */}
          <div className="product-table-container">
            <table className="product-table">
              <thead>
                <tr>
                  <th>Ürün Adı</th>
                  <th>Ürün Kodu</th>
                  <th>Stok Sayısı</th>
                  <th>Birim Fiyat</th>
                  <th>Açıklama</th>
                  <th>Marka</th>
                  <th>Kategori</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.code}</td>
                    <td>{product.stock} Adet</td>
                    <td>{product.price} TL</td>
                    <td>{product.description}</td>
                    <td>{product.brand}</td>
                    <td>{product.category}</td>
                    <td className="product-actions">
                      <button className="product-btn-edit" title="Düzenle">
                        Düzenle
                      </button>
                      <button
                        className="product-btn-delete"
                        title="Sil"
                        onClick={() => handleDeleteProduct(index)}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ürün Ekle Modali */}
        {showModal && (
          <div className="product-modal-overlay">
            <div className="product-modal-dialog">
              <div className="product-modal-content">
                <div className="product-modal-header">
                  <h5 className="product-modal-title">Ürün Ekle</h5>
                  <button
                    type="button"
                    className="product-btn-close"
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="product-modal-body">
                  <form>
                    <div className="product-form-group">
                      <label>Ürün Adı</label>
                      <input
                        type="text"
                        className="product-form-control"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                        placeholder="Ürün adını girin"
                      />
                    </div>
                    <div className="product-form-group">
                      <label>Stok Sayısı</label>
                      <input
                        type="number"
                        className="product-form-control"
                        name="stock"
                        value={newProduct.stock}
                        onChange={handleInputChange}
                        placeholder="Stok sayısını girin"
                      />
                    </div>
                    <div className="product-form-group">
                      <label>Birim Fiyat</label>
                      <input
                        type="text"
                        className="product-form-control"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        placeholder="Birim fiyatı girin"
                      />
                    </div>
                    <div className="product-form-group">
                      <label>Açıklama</label>
                      <textarea
                        className="product-form-control"
                        name="description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Ürün açıklamasını girin"
                      ></textarea>
                    </div>
                    <div className="product-form-group">
                      <label>Marka</label>
                      <input
                        type="text"
                        className="product-form-control"
                        name="brand"
                        value={newProduct.brand}
                        onChange={handleInputChange}
                        placeholder="Marka adını girin"
                      />
                    </div>
                    <div className="product-form-group">
                      <label>Kategori</label>
                      <select
                        className="product-form-control"
                        name="category"
                        value={newProduct.category}
                        onChange={handleInputChange}
                      >
                        <option>Elektronik</option>
                        <option>Giyim</option>
                        <option>Ev & Bahçe</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="product-modal-footer">
                  <button
                    type="button"
                    className="product-btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Kapat
                  </button>
                  <button
                    type="button"
                    className="product-btn-primary"
                    onClick={handleAddProduct}
                  >
                    Ekle
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer /> {/* Footer'ı burada gösteriyoruz */}
    </>
  );
};

export default ProductsSectionPage;


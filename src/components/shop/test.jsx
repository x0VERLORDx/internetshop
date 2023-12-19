import React, { useState, useEffect } from 'react';
import img1 from './../../img/colection/colection1.png';
import img2 from './../../img/colection/colection2.png';
import img3 from './../../img/colection/colection3.png';

import './shopContent.css';

const ShopContent = () => {
  const itemsPerPage = 9; // Количество товаров на странице
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Получение данных о товарах с сервера
    /* fetch(`http://localhost:8080/api/card_product?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.slice(0, itemsPerPage)); // Обновляем товары на текущей странице
      })
      .catch(error => console.error('Error fetching products:', error));
  */}, [currentPage]);

  const getPageNumbers = () => {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Дополнительная логика для загрузки данных с сервера и установки товаров на текущей странице
    /* fetch(`http://localhost:8080/api/card_product?page=${newPage}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.slice(0, itemsPerPage));
      })
      .catch(error => console.error('Error fetching products:', error));
    */
  };

  return (
    <div className="shopContent">
      <div className="conteiner">
        <div className="shop__nav">nav</div>
        <div className="product-grid-page">
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card__img">
                  <img src={product.image} alt={product.name} />
                </div>
                <h2 className="product-card__title">{product.name}</h2>
                <p className="product-card__price">${product.price}</p>
              </div>
            ))}
          </div>
          {getPageNumbers().map((page) => (
            <button
              className={`product-card__nextbtn ${
                currentPage === page ? 'active' : ''
              }`}
              key={page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          {currentPage > 1 && (
            <button
              className="product-card__nextbtn_arrow"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              ←
            </button>
          )}
          {/* Если есть еще товары, показываем кнопку для следующей страницы */}
          {products.length === itemsPerPage && (
            <button
              className="product-card__nextbtn_arrow"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
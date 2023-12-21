import React, { useState, useEffect } from 'react';
import img1 from './../../img/colection/colection1.png';
import img2 from './../../img/colection/colection2.png';
import img3 from './../../img/colection/colection3.png';

import './shopContent.css';

const ShopContent = () => {
  const itemsPerPage = 9; // Количество товаров на странице
  const [allProducts, setAllProducts] = useState([
    { id: 1, name: 'Футболка USA', price: 129, image: img1, category: 'Футболки' },
    { id: 2, name: 'Купальник Glow', price: 150, image: img2, category: 'Купальники' },
    { id: 3, name: 'Світшот Sweet Shot', price: 200, image: img3, category: 'Купальники' },
    { id: 4, name: 'Футболка USA', price: 129, image: img1, category: 'Футболки' },
    { id: 5, name: 'Купальник Glow', price: 150, image: img2, category: 'Свитшоты' },
    { id: 6, name: 'Світшот Sweet Shot', price: 200, image: img3, category: 'Футболки' },
    { id: 7, name: 'Футболка USA', price: 129, image: img1, category: 'Купальники' },
    { id: 8, name: 'Купальник Glow', price: 150, image: img2, category: 'Купальники' },
    { id: 9, name: 'Світшот Sweet Shot', price: 200, image: img3, category: 'Футболки' },
    { id: 7, name: 'Футболка USA', price: 129, image: img1, category: 'Свитшоты' },
    { id: 8, name: 'Купальник Glow', price: 150, image: img2, category: 'Купальники' },
    { id: 9, name: 'Світшот Sweet Shot', price: 200, image: img3, category: 'Свитшоты' },
    { id: 10, name: 'Футболка USA', price: 129, image: img1, category: 'Купальники' },
    { id: 11, name: 'Купальник Glow', price: 150, image: img2, category: 'Свитшоты' },
    { id: 12, name: 'Світшот Sweet Shot', price: 200, image: img3, category: 'Пальто' },
  ]);
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const filteredProducts = selectedCategory === 'Все'
      ? allProducts
      : allProducts.filter(product => product.category === selectedCategory);

    setProducts(filteredProducts); // Обновление filteredProducts вместо currentProducts

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    setProducts(currentProducts);
  }, [currentPage, selectedCategory, allProducts]);

  const getPageNumbers = () => {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="shopContent">
      <div className="container">
        <div className="shop__nav">
          <div className="category-menu">
            <button
              className={`category-btn ${selectedCategory === 'Все' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Все')}
            >
              Все
            </button>
            <button
              className={`category-btn ${selectedCategory === 'Футболки' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Футболки')}
            >
              Футболки
            </button>
            <button
              className={`category-btn ${selectedCategory === 'Купальники' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Купальники')}
            >
              Купальники
            </button>
            <button
              className={`category-btn ${selectedCategory === 'Пальто' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Пальто')}
            >
              Пальто
            </button>
            <button
              className={`category-btn ${selectedCategory === 'Свитшоты' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Свитшоты')}
            >
              Свитшоты
            </button>
            {/* Добавьте кнопки для других категорий, если необходимо */}
          </div>
        </div>
        <div className="product-grid-page">
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-card__img">
                  <img src={product.image} alt={product.name} />
                </div>
                <h2 className="product-card__title">{product.name}</h2>
                <p className="product-card__price">${product.price}</p>
              </div>
            ))}
          </div>
          <div className="product-card__shown-text">
            Показано: {Math.min(itemsPerPage * currentPage, products.length)} из {products.length} товаров
          </div>
          <div className="product-card_btn">
            {getPageNumbers().map((page, index) => (
              <button
                className={`product-card__nextbtn ${currentPage === page ? 'active' : ''}`}
                key={page}
                onClick={() => handlePageChange(page)}
              >
                {index === 0 ? currentPage : page}
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
    </div>
  );
};

export default ShopContent;

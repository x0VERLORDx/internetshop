import React, { useState, useEffect } from 'react';
import { allProducts } from './test';  // Импорт данных
import CardInfo from './CardInfo';
import './shopContent.css';

const ShopContent = ({ onProductClick, currentPath }) => {
    const itemsPerPage = 9; // Количество товаров на странице
    // Закомментировала код для получения данных с сервера
  const [products, setProducts] = useState([]);
  const [selectedProductInfo, setSelectedProductInfo] = useState(null);
  /* const [cart, setCart] = useState([]); */
  const [selectedCategory, setSelectedCategory] = useState('Всі');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCategoryProducts, setTotalCategoryProducts] = useState([]);
  const [isProductInfoVisible, setIsProductInfoVisible] = useState(false);


  useEffect(() => {
    // Получение данных о товарах с сервера
    /* fetch(`http://localhost:8080/api/card_product?page=${currentPage}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
*/
        // Адаптированный запрос к серверу (вам нужно адаптировать URL и метод запроса)
        fetch(`http://localhost:8080/card`)
          .then(response => response.json())
          .then(data => {
            // Адаптируем полученные данные, если необходимо
            const adaptedData = data.map(item => ({
              id: item.id,
              name: item.name,
              price: item.price,
              image: item.image,
              category: item.category,
            }));
            setProducts(adaptedData);
          })
          .catch(error => console.error('Error fetching products:', error));
      }, []);  // Пустой массив зависимостей означает, что useEffect сработает только при монтировании компонента
      


      const filteredProducts = selectedCategory === 'Всі'
      ? allProducts
      : allProducts.filter(product => product.category === selectedCategory);

      setTotalCategoryProducts(filteredProducts);

  
      // Рассчитываем индексы товаров для текущей страницы
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      // Выбираем только те товары, которые соответствуют текущей странице
      const currentProducts = filteredProducts.slice(startIndex, endIndex);

  
      setProducts(currentProducts);
  }, [currentPage, selectedCategory])

        const getPageNumbers = () => {
            const totalPages = Math.ceil(products.length / itemsPerPage);
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        };
    
      const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        setSelectedProductInfo(null); // Сброс информации о товаре при изменении страницы
        setIsProductInfoVisible(false);
    };

      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Сброс текущей страницы при изменении категории
        setSelectedProductInfo(null); // Сброс информации о товаре при изменении категории
        setIsProductInfoVisible(false);
    };

      const handleCardClick = (product) => {
        setSelectedProductInfo(product);
        setIsProductInfoVisible(true);
        onProductClick(product.name, product.category);
      };

/*       const handleAddToCart = (product) => {
        setCart([...cart, product]);
        setSelectedProductInfo(null);
      }; */
          
    return ( 
        <div className="shopContent">
            <div className="conteiner">
                <div className="shop__nav">
                <div className={`category-menu ${isProductInfoVisible ? 'hidden' : ''}`}>
            {/* Создание кнопок для категорий */}
            {['Всі', 'Футболки', 'Купальники', 'Пальто', 'Світшоти'].map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div> </div>
          <div className={`product-card__shown-text ${isProductInfoVisible ? 'hidden' : ''}`}>
          Показано: {Math.min(itemsPerPage * currentPage, totalCategoryProducts.length)} из {totalCategoryProducts.length} товаров
        </div>
        <div className={`product-grid-page ${isProductInfoVisible ? 'hidden' : ''}`}>
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} 
              className="product-card"
              onClick={() => handleCardClick(product)}>
                <div className="product-card__img">
                  <img src={product.image} alt={product.name} />
                </div>
                <h2 className="product-card__title">{product.name}</h2>
                <p className="product-card__price">${product.price}</p>
              </div>
            ))}
          </div>
          <div className={`product-card__shown-text ${isProductInfoVisible ? 'hidden' : ''}`}>
          Показано: {Math.min(itemsPerPage * currentPage, totalCategoryProducts.length)} из {totalCategoryProducts.length} товаров
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
        
            {isProductInfoVisible && (
        <div className="selected-product-info">
          <CardInfo selectedProductInfo={selectedProductInfo} />
        </div>
      )}
            </div>
    </div>
     );
 
export default ShopContent; 
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {allProducts} from '../shop/test.js';

import './newcollection.css';

const Newcollection = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  console.log(allProducts);

  useEffect(() => {
    // Получение данных о товарах с сервера
    /* fetch('http://localhost:8080/card')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Адаптируем полученные данные, если необходимо
        const adaptedData = data.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          image: arrayBufferToBase64(item.image), // преобразование байтового массива в base64
          category: item.category,
          color: item.color,
          size: item.size,
          available: item.available,
        }));
        setProducts(adaptedData);
        setRandomProducts(getRandomProducts(adaptedData)); // Обновляем случайные товары
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);*/
  setRandomProducts(getRandomProducts(allProducts));
  }, []);

/*   function arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }  */

  const getRandomProducts = (products) => {
    const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, Math.min(3, shuffledProducts.length));
  };

  const handleRandomCardClick = (product) => {
    // Обработка клика по случайному товару
    console.log('Clicked on random product:', product);
    // Если необходимо, дополнительная логика обработки клика
    // setSelectedProductInfo(product);
    // setIsProductInfoVisible(true);
    // onProductClick(product.name, product.category);
  };

  return (
    <section className="newcollection">
      <div className="conteiner">
        <div className="newcollection__header">
          <h2 className='newcollection_title-2'>
            Рекомендовано
          </h2>
        </div>
        <div className="newcollection_cardInfo_random">
          <div className="newcollection_product-grid">
          {randomProducts.map((product) => (
    <Link key={product.id} to="/shop" className="randomProductLink">
      <div className="randomProductCard" onClick={() => handleRandomCardClick(product)}>
        <div className="product-card__img">
          <img src={product.image} alt={product.name} />
        </div>
        <h2 className="product-card__title">{product.name}</h2>
        <p className="product-card__price">${product.price}</p>
      </div>
    </Link>
            ))}
          </div>
        </div>
        <div className="newcollection__btn">
          <Link className='goMagazine' to="/shop">Відкрити магазин</Link>
        </div>
      </div>
    </section>
  );
};

export default Newcollection;

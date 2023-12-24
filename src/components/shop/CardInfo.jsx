import React, { useState, useEffect} from 'react';
import { useBasket } from '../basket/basket-context';

import './cardInfo.css';



const CardInfo = ({ selectedProductInfo, onGoBack, getRandomProducts, onRandomCardClick, onAddToBasket}) => {
    const [randomProducts, setRandomProducts] = useState([]);
    const [selectedSize, setSelectedSize] = useState(selectedProductInfo.size[0]); // Устанавливаем первый размер по умолчанию
    const [selectedColor, setSelectedColor] = useState(selectedProductInfo.color[0]);
    const { addToBasket, state } = useBasket();
    const [isAddedToBasket, setIsAddedToBasket] = useState(false);

    useEffect(() => {
      setRandomProducts(getRandomProducts());
    }, [getRandomProducts]);

    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
      };

      const handleClickOpenShop = () => {
        const alreadyInBasket = state.items.some((item) => (
          item.id === selectedProductInfo.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
        ));
    
        if (!alreadyInBasket) {
          const selectedProduct = {
            ...selectedProductInfo,
            selectedSize,
            selectedColor,
          };
    
          addToBasket({
            id: selectedProductInfo.id,
            image: selectedProductInfo.image,
            name: selectedProductInfo.name,
            price: selectedProductInfo.price,
            size: selectedSize,
            color: selectedColor,
            // Другие данные, которые вы хотите добавить
          });
          setIsAddedToBasket(true);
          console.log('Добавить в корзину', selectedProduct);

          // Задержка сброса состояния через 3 секунды
            setTimeout(() => {
              setIsAddedToBasket(false);
            }, 3000);
        } else {
          console.log('Товар уже добавлен в корзину');
        }
      };


    return (
      <div className='cardInfo2box'>
      <div className="cardInfo">
        <div className="cardInfo_img">
            <img src={selectedProductInfo.image} alt={selectedProductInfo.name} />
        </div>
        <div className="cardInfo_select">
          <div className="cardInfo_group"><p className='cardInfo_price'>${selectedProductInfo.price}</p>
        <p className='cardInfo_available'>{selectedProductInfo.available ? 'В наличии' : 'Нет в наличии'}</p></div>
        
        <div className='cardInfo_size'>Оберіть розмір
        <div className='cardInfo_sizeButtons'>
          {selectedProductInfo.size.map((size) => (
            <button
              key={size}
              className={`sizeButton ${selectedSize === size ? 'active' : ''}`}
              onClick={() => handleSizeChange(size)}
              
              disabled={!selectedProductInfo.available} // Делаем кнопки неактивными, если товар не в наличии
            >
              {size}
            </button>
          ))}
        </div>
        </div>
        <div className='cardInfo_color'>Оберіть колір
          <div className='cardInfo_colorButtons'>
            {selectedProductInfo.color.map((color) => (
              <button
                key={color}
                className={`colorButton ${selectedColor === color ? 'active' : ''}`}
                onClick={() => handleColorChange(color)}
                style={{ backgroundColor: color}}
                disabled={!selectedProductInfo.available} // Делаем кнопки неактивными, если товар не в наличии
                
              >
              </button>
            ))}
          </div>
        </div>

        {isAddedToBasket && (
          <div className={`success-message ${isAddedToBasket ? '' : 'fade-out'}`}>
            Товар успішно додано до кошика!
          </div>
        )}
        
        <div className='btn-group'>
        <button
          className={`btn_addBusket ${!selectedProductInfo.available || !selectedSize || !selectedColor ? 'unavailable' : ''}`}
          onClick={handleClickOpenShop}
          disabled={!selectedProductInfo.available || !selectedSize || !selectedColor}
        >
          {selectedProductInfo.available ? 'Додати до кошику' : 'Нет в наличии'}
        </button>
        
        <button className="btn_goBack" onClick={onGoBack}>
        Назад
        </button>
        </div>
      </div>
        
      </div>
      <div className="cardInfo_random">
        <h3 className="cardInfo_random__title">Рекомендовано</h3>
        <div className="product-grid">
        {randomProducts.map((product) => (
          <div key={product.id} 
          className="randomProductCard"
          onClick={() => onRandomCardClick(product)}
          >
            <div className="product-card__img">
                  <img src={product.image} alt={product.name} />
                </div>
                <h2 className="product-card__title">{product.name}</h2>
                <p className="product-card__price">${product.price}</p>
          </div>
        ))}
        </div>
      </div>
      </div>
    );
  };
 
export default CardInfo;
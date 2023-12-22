import React, { useState} from 'react';

import './cardInfo.css';

function handleClickOpenShop() {
  console.log('Добавить в корзину');

}

const CardInfo = ({ selectedProductInfo, onGoBack}) => {
    const [selectedSize, setSelectedSize] = useState(selectedProductInfo.size[0]); // Устанавливаем первый размер по умолчанию
    const [selectedColor, setSelectedColor] = useState(selectedProductInfo.color[0]);


    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
      };



    return (
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
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
        <div className='btn-group'>
        <button className='btn_addBusket' onClick={handleClickOpenShop}>
                Додати до кошику
        </button>
        <button className="btn_goBack" onClick={onGoBack}>
        Назад
        </button>
        </div>
        </div>
        
      </div>
    );
  };
 
export default CardInfo;
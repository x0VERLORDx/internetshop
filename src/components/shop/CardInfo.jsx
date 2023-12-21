import React from 'react';


const CardInfo = ({ selectedProductInfo }) => {
    // Используйте selectedProductInfo внутри вашего компонента CardInfo
    return (
        <div>
        {/* <h2>{selectedProductInfo.name}</h2> */}
        <img src={selectedProductInfo.image} alt={selectedProductInfo.name} />
        <p>Цена: ${selectedProductInfo.price}</p>
        {/* Дополнительная информация о товаре */}
        {/* ... (другие элементы, использующие данные selectedProductInfo) */}
      </div>
    );
  };
 
export default CardInfo;
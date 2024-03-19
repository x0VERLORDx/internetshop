import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import { useBasket } from './basket-context';
import iconDel from './../../img/icons/close.svg';
import { Link } from 'react-router-dom'; // Импорт компонента Link из react-router-dom
import './basket.css';

const Basket = () => {
  const { state, removeFromBasket, clearBasket, getTotalPrice } = useBasket();
  const [coupon, setCoupon] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [discountApplied, setDiscountApplied] = useState(false);

  const applyDiscount = () => {
    // Проверка на корректность купона (регулярное выражение WOMAZING)
    const couponRegex = /^WOMAZING$/i;
    if (coupon.match(couponRegex)) {
      // Применение скидки
      setDiscountApplied(true);
      setError('');
    } else {
      // Очистка купона, сброс скидки и вывод ошибки
      setCoupon('');
      setDiscountApplied(false);
      setError('Невірний купон');
    }
  };

  return (
    <div className="basket">
      <Header />
      <div className="basket__content">
        <div className="conteiner">
          <div className="basket_title">Корзина</div>
        </div>
      </div>
      <Breadcrumbs />

      <div className="basket-content">
        <div className="conteiner">
          {state.items.length === 0 ? (
            // Выводим сообщение, если корзина пуста
            <div className="empty-basket-message">
              <p className='basket_title_empty'>В корзині пусто</p>
              <Link className='goMagazine' to="/shop">Відкрити магазин</Link>
            </div>
          ) : (
            <>
              {/* Выводим содержимое корзины, если она не пуста */}
              <div className="basket_title_content">
                <p className='title_name'>Товар</p>
                <div className="item_basket_title_content">
                  <p className='title_price'>Ціна</p>
                  <p className='title_size'>Розмір</p>
                  <p className='title_quantity'>Кількість</p>
                  <p className='title_color'>Колір</p>
                </div>
              </div>
              <div className="basket-group-flex">
                {state.items.map((item) => (
                  <div key={item.id} className="basket-item">
                    <div className="basket-item_btn_img_name">
                      <button
                        className='btn__Del'
                        onClick={() => removeFromBasket(item.id)}
                      >
                        <img src={iconDel} alt="iconDel"/>
                      </button>

                      <div className="basket-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="basket-name">{item.name}</div>
                    </div>
                    <div className="basket-item_price_size_color">
                      <div className="basket-price">${item.price}</div>
                      <div className="basket-size">{item.size}</div>
                      <div className="basket-quantity">{item.quantity}</div>
                      <div
                        className="basket-color"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="clearbasket_discount_item">
                <div className="discount_item">
                  <div className="discount_input">
                    <input
                      className='discount_input_coupon'
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder="Введіть купон"
                    />
                  </div>
                  <div className="discount_btn">
                    <button
                      className='btn__subdiscount'
                      onClick={() => applyDiscount()}
                    >
                      Застосувати купон
                    </button>
                  </div>
                </div>
                <button
                  className='btn__clearbasket'
                  onClick={() => clearBasket()}
                >
                  Очистити корзину
                </button>
              </div>
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              <div className="subOrder_items">
                <div className="basket_fullSumm">
                  <p>Підсумок: ${getTotalPrice()}</p>
                </div>
                {discountApplied && (
                  <div className="discount_applied">
                    <p>Знижка за купоном: 20%</p>
                  </div>
                )}
                <div className="finalSumm_sub_item">
                  <div className="basket_finalSumm">
                    <p>Разом:</p>
                    <p>${(discountApplied ? getTotalPrice() * 0.8 : getTotalPrice()).toFixed(2)}</p>
                  </div>
                  <button
                    className='btn__subOrder'
          onClick={() => {
            // Передача данных на страницу обработки заказа
              state.items.forEach((element) => delete(element.image));
              state.items.forEach((element) => delete(element.price));
              state.items.forEach((element) => delete(element.name));
              console.log(state.items);
            const orderData = {
              items: state.items,
              total: (discountApplied ? getTotalPrice() * 0.8 : getTotalPrice()).toFixed(2),
            };

            // Навигация на страницу обработки заказа
            navigate('/order', { state: orderData });
          }}
                  >
                    Оформити замовлення
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Basket;

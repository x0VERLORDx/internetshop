import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import './orderProcessing.css';

const OrderProcessing = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const orderData = location.state;
    const { control, handleSubmit, formState: { errors, isValid } } = useForm();
    const [isSubmitting, setSubmitting] = useState(false);
    const [setSubmitSuccess] = useState(false);
    const [payCash, setPayCash] = useState(false);

    const submitHandler = async (data_order) => {
        setSubmitting(true);

        // Добавление выбранного товара в данные заказа
       //const user = data_order.slice(0,3);
       // console.log(data_order);
       data_order.selectedItems = orderData.items;


        try {
            const paymentMethod = payCash ? 'Наличные' : 'Другой метод оплаты';
            data_order.paymentMethod = paymentMethod;
            console.log('Отправляемые данные на сервер:', JSON.stringify(data_order));
            // Отправка данных на сервер
            const response = await fetch('http://localhost:8080/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data_order),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                navigate('/ordersuccess');
            } else {
                console.error('Ошибка при отправке данных на сервер:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при отправке данных на сервер:', error.message);
        } finally {
            setSubmitting(false);
        }
    };

    if (!orderData) {
        // Если данные не переданы, можно обработать эту ситуацию
        return (
            <div>
                <h2>Ошибка: Данные заказа отсутствуют</h2>
            </div>
        );
    }

    const filteredItems = orderData.items.map(item => ({
        name: item.name,
        price: item.price,
    }));

    return (
        <div className="order">
            <Header />
            <div className="order__title">
                <div className="conteiner">
                    <div className="order_title_content">Оформлення замовлення</div>
                </div>
            </div>
            <Breadcrumbs />
            <div className="conteiner_form">
                <form onSubmit={handleSubmit(submitHandler)} className="modalform">
                    <div className='order_content'>
                        <div className="order_Buyer_details">
                            <div className="order_Recipient_info">
                                <h2 className="h2_modal">Дані покупця</h2>
                                <label></label>
                                {errors.name && <p className="error-message">{errors.name.message}</p>}
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Введіть ім'я",
                                        pattern: {
                                            value: /^[а-яґєїі-]{2,20}$/i,
                                            message: "Перевірте правильність набору"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <input
                                            className={`modal_input_order ${errors.name ? 'error' : ''} ${isValid ? 'valid' : ''}`}
                                            placeholder="Тарас"
                                            {...field}
                                        />
                                    )}
                                />

                                {errors.email && <p className="error-message">{errors.email.message}</p>}
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Введіть прізвище',
                                        pattern: {
                                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                            message: "Перевірте правильність набору"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <input
                                            className={`modal_input_order ${errors.email ? 'error' : ''} ${isValid ? 'valid' : ''}`}
                                            placeholder="levchienko1998@gmail.com"
                                            {...field} />
                                    )}
                                />

                                <label></label>

                                {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                                <Controller
                                    name="phone"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Введіть номер телефону',
                                        pattern: {
                                            value: /^\+380\d{9}$/,
                                            message: "Перевірте правильність набору"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <input
                                            className={`modal_input_order ${errors.phone ? 'error' : ''} ${isValid ? 'valid' : ''}`}
                                            placeholder="+380999105528"
                                            {...field}
                                        />
                                    )}
                                />
                            </div>
                            {/* Новый блок для адреса получателя */}
                            <div className="order_Recipient_address">
                                <h2 className="h2_modal">Адреса одержувача</h2>
                                <label></label>
                                {errors.country && <p className="error-message">{errors.country.message}</p>}
                                <Controller
                                    name="country"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Введіть країну',
                                        pattern: {
                                            value: /^(Україна|Польща)$/i,
                                            message: "Доступні країни для відправки: Україна та Польща"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <input
                                            className={`modal_input_order ${errors.country ? 'error' : ''} ${isValid ? 'valid' : ''}`}
                                            placeholder="Україна"
                                            {...field}
                                        />
                                    )}
                                />

                                {errors.city && <p className="error-message">{errors.city.message}</p>}
                                <Controller
                                    name="city"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Введіть місто' }}
                                    render={({ field }) => (
                                        <input
                                            className={`modal_input_order ${errors.city ? 'error' : ''} ${isValid ? 'valid' : ''}`}
                                            placeholder="Київ"
                                            {...field}
                                        />
                                    )}
                                />

                                {errors.street && <p className="error-message">{errors.street.message}</p>}
                                <Controller
                                    name="addressLine1"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Введіть вулицю та номер будинку' }}
                                    render={({ field }) => (
                                        <input
                                            className={`modal_input_order ${errors.street ? 'error' : ''} ${isValid ? 'valid' : ''}`}
                                            placeholder="вул. Хрещатик 23"
                                            {...field}
                                        />
                                    )}
                                />

                                {errors.home && <p className="error-message">{errors.home.message}</p>}

                                <Controller
                                    name="addressLine2"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Введіть номер квартири' }}
                                    render={({ field }) => (
                                        <input
                                            className={`modal_input_order ${errors.apartment ? 'error' : ''} ${isValid ? 'valid' : ''}`}
                                            placeholder="кв. 777"
                                            {...field}
                                        />
                                    )}
                                />
                            </div>
                            {/* Новый блок для адреса получателя */}
                            <div className="order_Recipient_comments">
                                <h2 className="h2_modal">Коментарі</h2>
                                {errors.comments && <p className="error-message">{errors.comments.message}</p>}
                                <Controller
                                    name="comments"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Введіть повідомлення',
                                        maxLength: {
                                            value: 300,
                                            message: 'Повідомлення повинно бути не більше 300 символів',
                                        }
                                    }}
                                    render={({ field }) => (
                                        <textarea
                                            className={`modal_input_order ${errors.comments ? 'error' : ''} ${isValid ? 'valid' : ''}`}
                                            placeholder="Додаткові коментарі"
                                            {...field}
                                        />
                                    )}
                                />
                            </div>
                        </div>

                        <div className="order_card">
                            <div className="order_card_list">
                                <h2 className="h2_modal">Ваше замовлення</h2>
                                <div className="group_title_card">
                                    <h3 className='all_sum_title'>Товар</h3>
                                    <h3 className='all_sum_title'>Всього</h3>
                                </div>
                                <ul className='order_list'>
                                    {filteredItems.map((item, index) => (
                                        <li key={index}>
                                            <div className="item-name">{item.name}</div>
                                            <div className="item-price">${item.price}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='all_sum_order'>
                                <h3 className='all_sum_title'>Разом:</h3>
                                <div className="all_sum-price"> ${orderData.total}</div>
                            </div>
                            <div className="sub_order_btn">
                                <h2 className="h2_modal">Спосіб оплати</h2>
                                <label className='checkbox_cash'>
                                    <input
                                        type="checkbox"
                                        checked={payCash}
                                        onChange={() => setPayCash(!payCash)}
                                    />
                                    Оплата готівкою
                                </label>
                            </div>
                            <button
                                className={`btn_submitorder ${isSubmitting ? 'submitting' : ''}`}
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Відправка...' : 'Розмістити замовлення'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default OrderProcessing;

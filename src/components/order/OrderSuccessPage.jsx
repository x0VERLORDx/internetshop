import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import iconDone from './../../img/icons/done.svg';
import { Link } from 'react-router-dom';

import './orderSuccessPage.css';

const OrderSuccessPage = () => {
  return (
    <div className="orderSuccessPage">
                <Header />
                <div className="conteiner">
                <div className="successPage__title">
                    <div className="successPage_title_content">Замовлення отримано</div>
                </div>
                </div>
                <Breadcrumbs />
                <div className="conteiner">
                    <div className="orderSuccessPage_content">
                        <div className="successPage_content">
                        <div className="successPage_img">
                            <img src={iconDone} alt='Done' />
                        </div>
                        <div className="successPage_text">
                            <div className="title_done">
                            Замовлення успішно оформлено
                            </div>
                            <div className="title_done_back">
                            Ми зв'яжемося з вами найближчим часом!
                            </div>
                        </div>
                        </div>
                    <div className="successPage_link">
                        <Link className='goHome' to="/">Перейти на головну</Link>
                    </div>
                    </div>
                </div>

                <Footer />
               
         
    </div>
  );
};

export default OrderSuccessPage;
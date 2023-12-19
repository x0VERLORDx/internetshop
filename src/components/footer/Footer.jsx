import React from 'react';
import logoImg from './../../img/icons/logo.svg';
import visa from './../../img/socials/visa-mastercard.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { phoneNumber, emailAddress } from '../constants';

import './footer.css';

const Footer = () => {
/*     const phoneNumber = '+380999115784';
  const emailAddress = 'womazing@gmail.com'; */
    return ( 

    <section className="footer">
        <div className="conteiner">
            <div className="footer__content">
            <div className="container1">
                <div className="footer__logo">
                        <img src={logoImg} alt="Logo"/> 
                        <span>Womazing</span>
                </div>
                <div className="footer__root">
                        <p>© Все права защищены</p>
                        <p> Политика конфиденциальности </p> 
                        <p>Публичная оферта</p>
                </div>
                
            </div>
            <div className="container2">
                    <nav className="footer__nav">
                        <ul>
                            <li><a href="#!">Головна</a></li>
                            <li><a href="#!">Магазин</a></li>
                            <li><a href="#!">Про нас</a></li>
                            <li><a href="#!">Контакти</a></li>
                        </ul>
                    </nav>
                    <div className="footer__category">
                        <ul>
                            <li><a href="#!">Пальто</a></li>
                            <li><a href="#!">Світшоти</a></li>
                            <li><a href="#!">Кардигани</a></li>
                            <li><a href="#!">Толстовки</a></li>
                        </ul>                        
                    </div>
            </div>
            <div className="container3">
                <div className="footer__contact">
                <p><a href={`tel:${phoneNumber}`}>+380 (99) 911 57 84</a></p>
                <p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
                </div>
                <div className='footer_social'>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div> 
                <div className="footer__visa">
                        <img src={visa} alt="Visa"/>
                    </div>
                </div>
            </div>  
    </div>
    </section> 
    
    );
}
 
export default Footer;
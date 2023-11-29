import React, { useEffect, useState } from 'react';
import logoImg from './../../img/icons/logo.svg';
import phoneImg from './../../img/icons/phone.svg';
import bagsImg from './../../img/icons/shopping-bags.svg';
import userImg from './../../img/icons/user.svg';
import './header.css';



function Header(){
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Очистить слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

    return(
        <header className={`header${isSticky ? ' sticky-header' : ''}`}>
{/* Logo & Nav & phone +basket */}
            <div className="conteiner">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="Logo"/> 
                        <span>Womazing</span>
                    </div>

                    <nav className="header__nav">
                        <ul>
                            <li><a href="#!">Головна</a></li>
                            <li><a href="#!">Магазин</a></li>
                            <li><a href="#!">Про нас</a></li>
                            <li><a href="#!">Контакти</a></li>
                        </ul>
                    </nav>
                    <div className="header__phone">
                    <button className='btn__phone'>
                        <img src={phoneImg} alt="Phone"/>
                        <span>+38 (098) 997 19 91 </span>
                    </button>
                    </div>
                    <div className="header__basket">
                        <button className='btn__basket'>
                            <img src={bagsImg} alt="Basket"/>
                        </button>
                    </div>
                    <div className="header__user">
                        <button className='btn__user'>
                            <img src={userImg} alt="User"/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
  
export default Header;
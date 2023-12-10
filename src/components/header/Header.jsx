import React, { useEffect, useState } from 'react';
import logoImg from './../../img/icons/logo.svg';
import phoneImg from './../../img/icons/phone.svg';
import bagsImg from './../../img/icons/shopping-bags.svg';
import userImg from './../../img/icons/user.svg';
/* import Modal from 'react-modal'; */
import CallModal from './CallModal';
import './header.css';

/* function handleClickPhone() {
    console.log('Открытие телефона');
  } */

/*   Modal.setAppElement('#root'); */

function Header(){
    const [isSticky, setIsSticky] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickPhone = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCallSubmit = async (data) => {
    // Здесь вы можете отправить данные на сервер или выполнить другие действия
    try {
        const response = await fetch('https://example.com/api/call', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Другие заголовки, если необходимо
          },
          body: JSON.stringify(data),
        });
    
        if (response.ok) {
          // Здесь можно обработать успешный ответ от сервера
          console.log('Данные успешно отправлены на сервер');
        } else if (response.status >= 400 && response.status < 500) {
           // Обработка ошибок клиента (например, 404 Not Found)
           console.error('Ошибка клиента при отправке данных на сервер:', response.statusText);
        } else if (response.status >= 500) {
        // Обработка ошибок клиента (например, 404 Not Found)
        console.error('Ошибка клиента при отправке данных на сервер:', response.statusText);
     }
      } catch (error) {
        // Обработка ошибок сервера (например, 500 Internal Server Error)
        console.error('Ошибка сервера при отправке данных на сервер:', error.message);
      }
      console.log('Данные для заказа звонка:', data);
    };
    
  
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
                    <button className='btn__phone' onClick={handleClickPhone}>
                        <img src={phoneImg} alt="Phone"/>
                        <span>+38 (098) 997 19 91 </span>
                    </button>
                    <CallModal
                    isOpen={isModalOpen}
                    onRequestClose={handleModalClose}
                    onSubmit={handleCallSubmit}
                    />
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
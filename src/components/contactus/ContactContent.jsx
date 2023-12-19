import React, {useState} from 'react';
import { phoneNumber, emailAddress, adress_URL } from '../constants';
import Map from './Map';

import './contactContent.css';
import MessageModal from './MessageModal';

const ContactContent = () => {
    const [isModalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = async (formData) => {
    // Логика обработки данных формы
    console.log(formData);
    // Закрыть модальное окно после отправки
    setModalOpen(false);
  };
    return ( 
        <div className="contactContent">
       <div className="conteiner">
        <div className="contact__map">
        <Map />
        </div>
        <div className="contact__info">
        <div className="contact__column">
            <p className='contact__title_column'>Телефон</p>
            <p><a href={`tel:${phoneNumber}`}>+380 (99) 911 57 84</a></p>
            </div>
        <div className="contact__column">
            <p className='contact__title_column'>Пошта</p>
            <p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
            
            </div>
        <div className="contact__column">
            <p className='contact__title_column'>Адреса</p>
            <p><a href={`https://maps.google.com/?q=${encodeURIComponent(adress_URL)}`}
                /* https://maps.app.goo.gl/ZsgZXuXRuPCDw4fd9 */
                target= "blank"
                rel="noopener noreferrer"
            >
                {adress_URL}
            </a></p>
            </div>               
        </div>
        <div className="messageModal">
            <div  className='conteiner'>
            <MessageModal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} onSubmit={handleFormSubmit} />
        </div>
        </div>
        </div>
       </div>


     );
}
 
export default ContactContent;
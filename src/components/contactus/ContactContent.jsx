/* import React, {useState} from 'react'; */
import { phoneNumber, emailAddress, adress_URL } from '../constants';
import Map from './Map';

import './contactContent.css';
/* import MessageModal from './MessageModal'; */

const ContactContent = () => {
    /* const [isModalOpen, setModalOpen] = useState(false); */

/*   const handleFormSubmit = async (formData) => {
    // Логика обработки данных формы
    console.log(formData);
    // Закрыть модальное окно после отправки
    setModalOpen(false);
  }; */
    return ( 
        <div className="contactContent">
       <div className="conteiner">
        <div className="contact__map">
        <Map />
        </div>
        <div className="contact__info">
        <div className="contact__column">
            <p className='contact__title_column'>Телефон</p>
            <p><a className="contact__columna" href={`tel:${phoneNumber}`}>+380 (99) 911 57 84</a></p>
            </div>
        <div className="contact__column">
            <p className='contact__title_column'>Пошта</p>
            <p><a className="contact__columna" href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
            
            </div>
        <div className="contact__column">
            <p className='contact__title_column'>Адреса</p>
            <p><a className="contact__columna" href={`https://maps.google.com/?q=${encodeURIComponent(adress_URL)}`}
                /* https://maps.app.goo.gl/ZsgZXuXRuPCDw4fd9 */
                target= "blank"
                rel="noopener noreferrer"
            >
                {adress_URL}
            </a></p>
            </div>               
        </div>
        <div className="messageModal">
            {/* <div  className='conteiner'>
            <MessageModal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} onSubmit={handleFormSubmit} />
        </div> */}
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/659b11300ff6374032bd78f4/1hjirmaek';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
            })();
        `}} />
        </div>
        </div>
       </div>


     );
}
 
export default ContactContent;
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import './contact.css';
import ContactContent from './ContactContent';

const Contact = () => {
    return ( 
        <div className="contact">
                <Header />
                <div className="contact__title">
                  <div className="conteiner">
                <div className="contact_title_content">Контакти</div>
                </div>
                </div>
                <Breadcrumbs />
                <ContactContent />
                <Footer />
        </div>

     );
}
 
export default Contact;
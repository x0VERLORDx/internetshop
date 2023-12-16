import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import './contact.css';

const Contact = () => {
    return ( 
        <div className="contact">
                <Header />
                <Breadcrumbs />
                <Footer />
        </div>

     );
}
 
export default Contact;
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import AboutUsContent from './AboutUsContent';

import './aboutUs.css';

const About = () => {
  return (
    <div className="about">
                <Header />
                <div className="about__title">
                  <div className="conteiner">
                <div className="about_title_content">Про бренд</div>
                </div>
                </div>
                <Breadcrumbs />
                <AboutUsContent />
                <Footer />
               
         
    </div>
  );
}

export default About;
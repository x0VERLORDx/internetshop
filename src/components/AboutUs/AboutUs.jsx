import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

const About = () => {
  return (
    <div className="about">
                <Header />
                <div className="about_title">Про бренд</div>
                <Breadcrumbs />

                <Footer />
         
    </div>
  );
}

export default About;
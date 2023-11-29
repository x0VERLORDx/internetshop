import React from 'react';
import Carousel from '../promo/Slider.jsx'; 
import ColoredBlock from '../promo/Colored-Block.jsx';
import promoImg1 from './../../img/images/photo-big-header.png';
import promoImg2 from './../../img/images/photo-header_2.png';
import promoImg3 from './../../img/images/photo-header_3.png';
import './promo.css'

function Promo1 () {
    return ( 
    <section className="promo">
         
        <div className="conteiner">
             
            <div className="promo__content">
                <div className="promo__slider">
                    <Carousel />
                </div>
            
                <div className="promo__img-container">
                    <div className="promoImg1">
                        <img  src={promoImg1} alt=""/>
                    </div>
                    <div className="promoImg2">
                        <img src={promoImg2} alt=""/>
                    </div>
                    <div className="promoImg3">
                        <img src={promoImg3} alt=""/>
                    </div>
                </div>
            </div>
            </div>
    </section> 
    
    );
}

function Promo() {
    return (
      <div className="app-container">
        <Promo1 />
        <ColoredBlock />
        
      </div>
    );
  }
export default Promo;
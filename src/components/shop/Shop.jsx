import React, { useState } from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import ShopContent from "./ShopContent";

import './shop.css';


const Shop = () => {
  const [selectedProductTitle, setSelectedProductTitle] = useState(null);

  const handleProductClick = (title, category) => {
    setSelectedProductTitle(title);
  };

    return (
         <div className="shop">
                <div className="header__shop">
                <Header />
                </div>
                <div className="shop__title">
                  <div className="conteiner">
                <div className="shop_title_content">
                  {selectedProductTitle || 'Магазин'}
                  </div>
                </div>
                </div>
                <Breadcrumbs />
                <ShopContent
                  onProductClick={handleProductClick}
                />
                <div className="footer__shop">
                <Footer />
                </div>
         </div> 
    );
}
 
export default Shop;
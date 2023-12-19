import Footer from "../footer/Footer";
import Header from "../header/Header";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import ShopContent from "./ShopContent";

import './shop.css';


const Shop = () => {
    return (
         <div className="shop">
                <div className="header__shop">
                <Header />
                </div>
                <div className="shop__title">
                  <div className="conteiner">
                <div className="shop_title_content">Магазин</div>
                </div>
                </div>
                <Breadcrumbs />
                <ShopContent />

                <div className="footer__shop">
                <Footer />
                </div>
         </div> 
    );
}
 
export default Shop;
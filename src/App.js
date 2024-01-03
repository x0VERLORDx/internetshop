import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/AboutUs/AboutUs';
import Shop from './components/shop/Shop';
import Contact from './components/contactus/Contact';
import Basket from './components/basket/Basket';
import OrderProcessing from './components/order/OrderProcessing';
import OrderSuccessPage from './components/order/OrderSuccessPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<OrderProcessing />} />
        <Route path="/ordersuccess" element={<OrderSuccessPage />} />

      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/aboutUs/AboutUs';
import Shop from './components/shop/Shop';
/* import Contact from './Contact'; */

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/AboutUs';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Basket from './components/Basket';
import OrderProcessing from './components/OrderProcessing'; 
import OrderSuccessPage from './components/OrderSuccessPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/basket" component={Basket} />
        <Route path="/order" component={OrderProcessing} />
        <Route path="/ordersuccess" component={OrderSuccessPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
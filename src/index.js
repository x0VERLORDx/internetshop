import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { BasketProvider } from './components/basket/basket-context';

import './styles/reset.css';
import './styles/common.css';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BasketProvider>
      <App />
    </BasketProvider>
    </React.StrictMode>
);

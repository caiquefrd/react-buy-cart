import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import CartPage from './components/CartPage';

const App = () => (
  <CartProvider>
    <div>
      <CartSummary />
      <ProductList />
      <CartPage />
    </div>
  </CartProvider>
);

export default App;

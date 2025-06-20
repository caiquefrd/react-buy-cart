import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartSummary = () => {
  const { totalItems } = useContext(CartContext);
  return <h3>Cart ({totalItems})</h3>;
};

export default CartSummary;

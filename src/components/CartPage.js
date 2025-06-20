import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, cartTotal, increment, decrement } = useContext(CartContext);

  return (
    <div className='section'>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className='cart-item'>
              <span>{item.name} - ${item.price} x {item.quantity}</span>
              <button onClick={() => increment(item.id)}>+</button>
              <button onClick={() => decrement(item.id)}>-</button>
            </div>
          ))}
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;

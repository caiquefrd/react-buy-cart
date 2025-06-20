import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, cartTotal, increment, decrement } = useContext(CartContext);

  return (
    <div className='section'>
      <h2>Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className='cart-item'>
              <span>{item.name} - R${item.price.toFixed(2)} x {item.quantity}</span>
              <button onClick={() => increment(item.id)}>+</button>
              <button onClick={() => decrement(item.id)}>-</button>
            </div>
          ))}
          <h3>Total: R${cartTotal.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;

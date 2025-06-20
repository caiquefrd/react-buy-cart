import React, { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem('cartState')) || {
  cartItems: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };

    case 'INCREMENT':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREMENT':
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter(item => item.quantity > 0),
      };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cartState', JSON.stringify(state));
  }, [state]);

  const addItemToCart = (product) => dispatch({ type: 'ADD_ITEM', payload: product });
  const removeItemFromCart = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const increment = (id) => dispatch({ type: 'INCREMENT', payload: id });
  const decrement = (id) => dispatch({ type: 'DECREMENT', payload: id });

  const totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems: state.cartItems,
      addItemToCart,
      removeItemFromCart,
      increment,
      decrement,
      totalItems,
      cartTotal,
    }}>
      {children}
    </CartContext.Provider>
  );
};

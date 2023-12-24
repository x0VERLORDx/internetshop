// basket-context.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

const initialState = {
  items: [],
};

const basketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        // Товар с таким id уже есть в корзине, обновляем количество или другие свойства
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        const updatedState = {
          ...state,
          items: updatedItems,
        };

        saveBasketToLocalStorage(updatedState);
        return updatedState;
      } else {
        // Товара с таким id нет в корзине, добавляем новый
        const newState = {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };

        saveBasketToLocalStorage(newState);
        return newState;
      }

    case 'REMOVE_FROM_BASKET':
      const updatedItems = state.items.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      const updatedState = {
        ...state,
        items: updatedItems.filter(item => item.quantity > 0),
      };

      saveBasketToLocalStorage(updatedState);
      return updatedState;

    case 'CLEAR_BASKET':
      const clearedState = {
        ...state,
        items: [],
      };
      saveBasketToLocalStorage(clearedState);
      return clearedState;

    case 'RESTORE_BASKET':
      return action.payload;

    default:
      return state;
  }
};

const saveBasketToLocalStorage = (state) => {
  localStorage.setItem('basket', JSON.stringify(state));
};

export const BasketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, initialState);

  useEffect(() => {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
      dispatch({ type: 'RESTORE_BASKET', payload: JSON.parse(savedBasket) });
    }
  }, []); // Запустится только при монтировании компонента

  const addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  const removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: itemId });
  };

  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' });
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  // Добавьте другие методы, если необходимо

  return (
    <BasketContext.Provider value={{ state, addToBasket, removeFromBasket, clearBasket, getTotalPrice }}>
      {children}
    </BasketContext.Provider>
  );
};

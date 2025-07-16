// src/context/CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from local storage on initial load
    try {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    } catch (error) {
      console.error("Failed to parse cart items from local storage:", error);
      return [];
    }
  });

  // Save cart items to local storage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart items to local storage:", error);
    }
  }, [cartItems]);

  const addToCart = (product, quantity = 1, selectedAge = "default", selectedColor = null) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.selectedAge === selectedAge && item.selectedColor?.code === selectedColor?.code
      );

      if (existingItemIndex > -1) {
        // If item exists, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // If item does not exist, add it to the cart
        const productPrice = product.price[selectedAge]?.currentprice || product.price.default.currentprice;
        return [
          ...prevItems,
          {
            id: product.id,
            productname: product.productname,
            thumbnail: product.thumbnail,
            price: productPrice,
            quantity,
            selectedAge,
            selectedColor,
          },
        ];
      }
    });
  };

  const removeFromCart = (productId, selectedAge, selectedColorCode) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === productId && item.selectedAge === selectedAge && item.selectedColor?.code === selectedColorCode)
      )
    );
  };

  const updateQuantity = (productId, selectedAge, selectedColorCode, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === productId && item.selectedAge === selectedAge && item.selectedColor?.code === selectedColorCode
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
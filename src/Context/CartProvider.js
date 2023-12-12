import React from 'react';
import { useEffect, useState } from "react";
import {CartContext} from "./CartContext";

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const additem = (product, quantity, stock) => {
    if (isInCart(product.id)) {
      if (!isQuantityAboveStock(product, quantity, stock)) {
        const newProducts = products.map((prod) => {
          if (prod.id === product.id) {
            return {
              ...prod,
              quantity: prod.quantity + quantity,
            };
          }
          return prod;
        });
        setProducts(newProducts);
      } else {
        msgSinStock();
      }
    } else {
      setProducts([
        ...products,
        {
          ...product,
          quantity,
        },
      ]);
    }
  };

  const isQuantityAboveStock = (product, quantity, stock) => {
    const newItem = products.find((prod) => prod.id === product.id);
    return newItem.quantity + quantity > stock ? true : false;
  };

  const msgSinStock = () => {
    alert('No hay Suficiente Stock ');
  };

  const removeItem = (productId) => {
    const updatedProducts = products.filter((prod) => prod.id !== productId);
    setProducts(updatedProducts);
  };

  const clear = () => {
    setProducts([]);
  };

  const isInCart = (productId) => {
    return products.some((prod) => prod.id === productId);
  };

  useEffect(() => {
    calcTotalQuantity();
    calcTotalPrice();
  }, [products]);

  const calcTotalQuantity = () => {
    const totalQuantity = products.reduce((acc, prod) => {
      return acc + prod.quantity;
    }, 0);
    setProductQuantity(totalQuantity);
  };

  const calcTotalPrice = () => {
    const totalPrice = products.reduce((acc, prod) => {
      return acc + parseInt(prod.price) * prod.quantity;
    }, 0);
    setTotal(totalPrice);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        additem,
        removeItem,
        clear,
        productQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
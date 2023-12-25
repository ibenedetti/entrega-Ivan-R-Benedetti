import React, { createContext, useState, useEffect  } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemToCart = (itemToAdd, quantityToAdd) => {
    const { id, stock } = itemToAdd;
  
    if (isInCart(id)) {
      if (!isQuantityAboveStock(id, quantityToAdd, stock)) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + quantityToAdd }
              : product
          )
        );
      } else {
        showOutOfStockMessage();
      }
    } else {
      if (!isQuantityAboveStock(id, quantityToAdd, stock)) {
        setProducts((prevProducts) => [
          ...prevProducts,
          { ...itemToAdd, quantity: quantityToAdd },
        ]);
      } else {
        showOutOfStockMessage();
      }
    }
  };

  const isInCart = (productId) => {
    return products.some((product) => product.id === productId);
  };

  const isQuantityAboveStock = (productId, quantity, stock) => {
    const existingProduct = products.find((product) => product.id === productId);
    return existingProduct && existingProduct.quantity + quantity > stock;
  };

  const showOutOfStockMessage = () => {
    Swal.fire('No hay Suficiente Stock');
  };

  const removeItem = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const clear = () => {
    setProducts([]);
  };

  useEffect(() => {
    calcTotalQuantity();
    calcTotalPrice();
  }, [products]);

  const calcTotalQuantity = () => {
    const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);
    setProductQuantity(totalQuantity);
  };

  const calcTotalPrice = () => {
    const totalPrice = products.reduce((acc, product) => acc + parseInt(product.price) * product.quantity, 0);
    setTotal(totalPrice);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addItemToCart,
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
// import { useEffect , useState } from "react";
// import { CartContext} from "./CartContext";


// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [total, setTotal] = useState(0);

//   const addItem = (item, quantity, stock) => {
//     if (isInCart(item.id)) {
//       if (!isQuantityAboveStock(item, quantity, stock)) {
//         const newCart = cart.map((prod) => {
//           if (prod.id === item.id) {
//             return {
//               ...prod,
//               quantity: prod.quantity + quantity,
//             };
//           }
//           return prod;
//         });
//         setCart(newCart);
//       } else {
//         console.log(`Not enough stock for ${item.title}. Available stock: ${stock}`);
//         // Handle the case where there's not enough stock (console.log, alert, or any other desired action)
//       }
//     } else {
//       setCart([
//         ...cart,
//         {
//           ...item,
//           quantity,
//         },
//       ]);
//     }
//   };

//   const isQuantityAboveStock = (item, quantity, stock) => {
//     const newItem = cart.find((prod) => prod.id === item.id);
//     return newItem.quantity + quantity > stock;
//   };

//   const removeItem = (itemId) => {
//     const cartUpdate = cart.filter((prod) => prod.id !== itemId);
//     setCart(cartUpdate);
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const isInCart = (itemId) => {
//     return cart.some((prod) => prod.id === itemId);
//   };

//   useEffect(() => {
//     calcTotalQuantity();
//     calcTotalPrice();
//   }, [cart]);

//   const calcTotalQuantity = () => {
//     const totalQuantity = cart.reduce((accumulator, prod) => accumulator + prod.quantity, 0);
//     setTotalQuantity(totalQuantity);
//   };

//   const calcTotalPrice = () => {
//     const totalPrice = cart.reduce((accumulator, prod) => accumulator + parseFloat(prod.price) * prod.quantity, 0);
//     setTotal(totalPrice);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };



// // const CartProvider = ({ children }) => {  
// //     const [products, setProducts] = useState([]);
// //     const [productQuantity, setProductQuantity] = useState(0);  

// //     const additem = (product, quantity) => {
// //         console.log(quantity);
// //         setProducts([
// //             ...products, 
// //             { 
// //                 ...product, 
// //                 quantity 
// //             }]);
// //         }

// //     const clear = () => {
// //         setProducts([]);
// //     }
// //     useEffect(() => {
// //         setProductQuantity(
// //             products.reduce((acc, product) => acc + product.quantity, 0)
// //         );
// //     }, [products]);
        
// //     return ( 
// //         <div>
// //             <CartContext.Provider value={{products, additem, productQuantity , clear}}>
// //                 {children}            
// //             </CartContext.Provider>
// //         </div>
// //      );
// // }

// // export default CartProvider;

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
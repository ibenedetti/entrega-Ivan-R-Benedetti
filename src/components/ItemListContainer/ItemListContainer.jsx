import React, { useState, useEffect, useContext } from 'react';
import ItemList from '../ItemList/ItemList';
import Itemcount from './Itemcount';
import ClientFactory from '../../config/ClientFactory';
import Loading from '../Loading/Loading';
import { db } from '../../config/configFirebase';
import CartProvider from '../../Context/CartProvider';
import {CartContext} from "../../Context/CartContext";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { totalQuantity } = useContext(CartProvider);

  useEffect(() => {
    // Fetching a single product from Firebase using ClientFactory
    const fetchedProduct = ClientFactory();
    console.log('Product:', fetchedProduct);

    // Fetching the product list from Firebase
    const fetchProductList = async () => {
      try {
        const querySnapshot = await db.collection('products').get();
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductList(items);
      } catch (error) {
        console.error('Error fetching product list:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductList();
  }, []);

  console.log('Product List:', productList);

  return (
    <div>
      <h1>Item List container</h1>
      <p>Total Quantity in Cart: {totalQuantity}</p>
      <Itemcount />

      {loading ? (
        <Loading />
      ) : (
        <ItemList productList={productList} />
      )}
    </div>
  );
};

export default ItemListContainer;

    // FIRST TRY
// import { useState , useEffect } from 'react';
// import ItemList from "../ItemList/ItemList";
// import Intemcount from "./Itemcount";
// import ClientFactory from '../../config/ClientFactory';

// const {product} = ClientFactory()
// console.log("file: ClientFactory.jsx ~ line 1 ~ ClientFactory ~ products", product)

// const ItemListContainer = () => {
  
//   const [productList, setProductList] = useState([]);
//   const fetchProducts = () => {
//        fetch('https://fakestoreapi.com/products?limit=15')
//       .then((response) => response.json())
//       .then((data) => setProductList(data))
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     fetchProducts();
    
//   }, []);
  
//   return (
//     <div>
//       <h1>Item List container</h1>
//       <Intemcount />
//       <ItemList productList={productList} />
//     </div>
//   );
// };

// export default ItemListContainer;

// import React, { useState, useEffect } from 'react';
// import ItemList from '../ItemList/ItemList';
// import Itemcount from './Itemcount';
// import ClientFactory from '../../config/ClientFactory';
// import { db } from '../../config/configFirebase';

// const ItemListContainer = () => {
//   const [product, setProduct] = useState({});
//   const [productList, setProductList] = useState([]);

//   // Fetching a single product from Firebase using ClientFactory
//   useEffect(() => {
//     const fetchedProduct = ClientFactory();
//     setProduct(fetchedProduct);
//   }, []);

//   // Fetching the product list from Firebase
//   useEffect(() => {
//     // Assuming 'items' is the collection in your Firestore database
//     const itemsCollection = db.collection('items');

//     // Use the appropriate query to get all items in the collection
//     const query = itemsCollection.get();

//     // Fetch the data from the query result
//     query
//       .then((querySnapshot) => {
//         const items = [];
//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });
//         setProductList(items);
//       })
//       .catch((error) => console.log('Error getting documents: ', error));
//   }, []);

//   console.log('Product:', product);
//   console.log('Product List:', productList);

//   return (
//     <div>
//       <h1>Item List container</h1>
//       <Itemcount />
//       <ItemList productList={productList} />
//     </div>
//   );
// };

// export default ItemListContainer;


    //SECOND TRY
// import React, { useState, useEffect, useContext } from 'react';
// import ItemList from '../ItemList/ItemList';
// import Itemcount from './Itemcount';
// import ClientFactory from '../../config/ClientFactory';
// import Loading from '../Loading/Loading';
// // import  { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../../config/configFirebase';
// import CartProvider from '../../Context/CartProvider';


// const ItemListContainer = () => {
//   const [product, setProduct] = useState({});
//   const [productList, setProductList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { totalQuantity } = useContext(CartProvider);

//   useEffect(() => {
//     const fetchedProduct = ClientFactory();
//     setProduct(fetchedProduct);
//   }, []);

//   // Fetching the product list from Firebase
//   useEffect(() => {
//     const fetchProductList = async () => {
//       try {
//         const querySnapshot = await db.collection('products').get();
//         const items = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProductList(items);
//       } catch (error) {
//         console.error('Error fetching product list:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductList();
//   }, []);

//   console.log('Product:', product);
//   console.log('Product List:', productList);

//   return (
//     <div>
//       <h1>Item List container</h1>
//       <p>Total Quantity in Cart: {totalQuantity}</p>
//       <Itemcount />
      
//       {loading ? (
//         <Loading />
//       ) : (
//         <ItemList productList={productList} />
//       )}
//     </div>
//   );
// };

// export default ItemListContainer;


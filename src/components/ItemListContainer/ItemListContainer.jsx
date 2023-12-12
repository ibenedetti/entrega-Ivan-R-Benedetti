// import React, { useState, useEffect, useContext } from 'react';
// import ItemList from '../ItemList/ItemList';
// import Itemcount from './Itemcount';
// import ClientFactory from '../../config/ClientFactory';
// import Loading from '../Loading/Loading';
// import { db } from '../../config/configFirebase';
// import CartProvider from '../../Context/CartProvider';
// import {CartContext} from "../../Context/CartContext";

// const ItemListContainer = () => {
//   const [productList, setProductList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { totalQuantity } = useContext(CartContext);

//   // Fetching a single product from Firebase using ClientFactory
//   const fetchedProduct = ClientFactory();
//   console.log('Product:', fetchedProduct);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetching a single product from Firebase using ClientFactory
//         const fetchedProduct = ClientFactory();
//         console.log('Product:', fetchedProduct);
  
//         // Fetching the product list from Firebase
//         const querySnapshot = await db.collection('products').get();
//         const items = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProductList(items);
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchData();
//   }, []);

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

// // export default ItemListContainer;
import React, { useState, useEffect, useContext } from 'react'; 
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import firestore from '../../config/configFirebase';


const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await firestore.collection('products').get();
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductList(items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

      {loading ? (
        <Loading />
      ) : (
        <ItemList productList={productList} />
      )}
    </div>
  );
};

export default ItemListContainer;

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Loading from '../Loading/Loading';
// import ItemList from '../ItemList/ItemList';

// import { collection, getDocs, query, where } from 'firebase/firestore';
// import firestore from '../../config/configFirebase'; // Update the path if needed

// function ItemListContainer({ greeting }) {
//   const [products, setProducts] = useState(null);
//   const { id: categoryId } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const collectionRef = categoryId
//           ? query(collection(firestore, 'products'), where('category', '==', categoryId))
//           : collection(firestore, 'products');

//         const querySnapshot = await getDocs(collectionRef);

//         const productsAdapted = querySnapshot.docs.map(doc => {
//           const data = doc.data();
//           return { id: doc.id, ...data };
//         });

//         setProducts(productsAdapted);
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     };

//     fetchData();
//   }, [categoryId]);

//   return (
//     <>
//       {!products && (
//         <div>
//           <Loading/>
//         </div>
//       )}
//       {products && products.length > 0 && (
//         <div>
//           <h2>
//             {greeting} {categoryId && categoryId}
//           </h2>
//           <ItemList products={products} />
//         </div>
//       )}
//       {products && products.length === 0 && (
//         <div>
//           <h3 className="text-center my-3">
//             No existe productos con la categoría: <br /> {categoryId && categoryId}
//           </h3>
//         </div>
//       )}
//     </>
//   );
// }

// export default ItemListContainer;
import React, { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import  { collection, getDocs, query, where } from 'firebase/firestore';
import firestore from '../../config/configFirebase';


const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id: categoryId } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = categoryId
          ? query(collection(firestore, 'products'), where('category', '==', categoryId))
          : collection(firestore, 'products');
  
        const querySnapshot = await getDocs(collectionRef);
  
        const productsAdapted = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        setProductList(productsAdapted);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [categoryId]);

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
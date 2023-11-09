import { useState , useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import Intemcount from "./Intemcount";

const ItemListContainer = () => {
  
  const [productList, setProductList] = useState([]);
  const fetchProducts = () => {
       fetch('https://fakestoreapi.com/products?limit=15')
      .then((response) => response.json())
      .then((data) => setProductList(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
    
  }, []);
  
  return (
    <div>
      <h1>Item List container</h1>
      <Intemcount />
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;
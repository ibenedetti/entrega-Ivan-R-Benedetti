import { useEffect , useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  
  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}?limit=15`)
    .then((response) => response.json())
    .then((data) => setProduct(data))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <ItemDetail itemSelected={product} />
    </div>
  )
}

export default ItemDetailContainer
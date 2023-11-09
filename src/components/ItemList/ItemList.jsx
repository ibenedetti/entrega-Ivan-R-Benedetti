import { useEffect , useState } from 'react';
import './styles.css';
import { Link , useParams} from 'react-router-dom';
import Item from "../Item/Item"

const ItemList = ({ productList }) => {
  const [items, setItems] = useState([]);
  const {id} = useParams();

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products?limit=15')
    .then((response) => response.json())
    .then((json) => setItems(json))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
    if (id) {
      const filteredProducts = items.filter((product) => {
        const category = product.category.includes('-')
          ? product.category.replace('-', ' ')
          : product.category;
        return category === id;
      });
      setItems(filteredProducts);
    } else {
      fetchProducts();
    }
  }, [id, items]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='itemListContainer'>
        {productList.map((product) => (
                <Link to={'item/' + product.id} key={product.id}>
                    <Item                        
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                    />
                </Link>
            ))}
        
    </div>
  )
}

export default ItemList
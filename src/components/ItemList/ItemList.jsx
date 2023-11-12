import { useEffect, useState } from 'react';
import './styles.css';
import { Link, useParams } from 'react-router-dom';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

const ItemList = ({ productList }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const myFunction = () => {
      setLoading(true);
      const delayMilliseconds = 1000;
  
      setTimeout(() => {
        if (id) {
          const filteredItems = productList.filter(
            (product) => product.category === id
          );
          setItems(filteredItems);
        } else {
          setItems(productList);
        }
  
        setLoading(false);
      }, delayMilliseconds);
    };
  
    myFunction();
  }, [id, productList]);

  return (
    <div className="itemListContainer">
      {loading ? (
        <Loading />
      ) : (
        items.map((product) => (
          <Link to={'item/' + product.id} key={product.id}>
            <Item
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default ItemList;
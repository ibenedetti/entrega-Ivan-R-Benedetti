import React, { useContext, useState } from 'react';
import Itemcount from '../ItemListContainer/Itemcount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartProvider';
import Loading from '../Loading/Loading';
import './styles.css';

const ItemDetail = ({ id, title, price, category, image, stock, description }) => {
  const { addItemToCart } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      title,
      price,
      image,
      stock,
    };
  
    addItemToCart(item, quantity);
    console.log(item, quantity);
  };

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <article className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <header className="card-title">
            <h3>{title}</h3>
          </header>
          <picture className="card-img">
            <img src={image} alt={title} />
          </picture>
          <div className="card-description">
            <p>
              Descripción:<b> {description}</b>
            </p>
            <p>
              Categoría: <b>{category}</b>
            </p>
            <div>
              <p>
                Stock: <b>{stock}</b>
              </p>
            </div>

            <p className="card-description">
              Precio:<b> ${price}</b>
            </p>
          </div>
          <div>
            {quantityAdded > 0 ? (
              <>
                <p>¡Producto agregado al carrito!</p>
                <Link to="/" className="link link-left">
                  Seguir Comprando
                </Link>
                <Link to="/cart" className="link link-right">
                  Terminar Compra
                </Link>
              </>
            ) : (
              <>
                <Itemcount initial={0} stock={stock} onAdd={handleAddToCart} />
              </>
            )}
          </div>
        </>
      )}
    </article>
  );
};

export default ItemDetail;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartProvider';
import CartItem from '../../components/CartItem/CartItem';
import './styles.css';

const Cart = () => {
  const { products, clear, productQuantity, total } = useContext(CartContext);

  if (!products || productQuantity === 0) {
    return (
      <div fluid="md" className="text-center">
        <div className="text-center">
          <h1>No hay items en el carrito</h1>
        </div>
        <div className="btn">
          <Link to={"/"} className="link">
            Seguir comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='cart-container'>
      <div className='item-container'>
        {products.map((prod) => (
          <div key={prod.id} className='item'>
            <CartItem key={prod.id} {...prod} />
          </div>
        ))}
        <div className='total'>Total: ${total}</div>
      </div>
      <div className='buttons-container'>
        <div>
          <button className='link-compra clear' onClick={() => clear()}>Limpiar carrito</button>
        </div>
        <div>
          <div>
            <div>
              <Link className="link link-compra link-1" to={"/"}>
                Seguir comprando
              </Link>
            </div>
            <div>
              <Link className="link link-compra link-2" to="/checkout">
                Finalizar compra
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
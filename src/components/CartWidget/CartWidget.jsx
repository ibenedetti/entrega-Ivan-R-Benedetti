import { useContext, useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { CartContext } from '../../Context/CartProvider';
import CartItem from '../CartItem/CartItem'; 
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cart, totalQuantity } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
console.log("Total Quantity en CartWidget:", totalQuantity);


  return (
    <div>
      {totalQuantity && <span>{totalQuantity}</span>}

      <Link to="/Cart" onClick={() => setVisible(!visible)}>
        <button className='cart-btn'>
          <Icon.Cart color="white" background="transparent" size={30} />
        </button>
      </Link>

      {visible && cart && cart.length > 0 && <CartItem cart={cart} />}
    </div>
  );
}

export default CartWidget;

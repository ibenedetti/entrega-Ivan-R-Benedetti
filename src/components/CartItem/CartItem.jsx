import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartProvider';

const CartItem = ({ id, name, price, quantity, image }) => {
    const { removeItem } = useContext(CartContext);
  return (

    <div>
        
          <div > 
            <img className='divCart_img' src={image} alt={name} /></div>
          <div>
          Producto: {name}
          </div>
          <div>
          Price: {price}
          </div>
          <div>
          Cantidad: {quantity}
          </div>
          <div>
          Total: {price*quantity}
          </div>
          <div >
          <button onClick={() => removeItem(id)}> Eliminar
          </button>
          </div >
          

      </div>

   
  )
}

export default CartItem
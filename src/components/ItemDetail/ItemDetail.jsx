// import { useState } from 'react';
// import './styles.css';
// import Itemcount from '../ItemListContainer/Itemcount';
// import { useNavigate } from 'react-router-dom';
// import { useContext } from "react";
// import { CartContext } from '../../Context/CartContext';

// const { additem } = useContext(CartContext);

// const ItemDetail = ({ itemSelected }) => {
//   const [count, setCount] = useState(0);
//   const stock = useState(5);
//   const navigate = useNavigate();

//   const handleNavigation = () => { 
//     navigate('/cart');
//   }
//   return (
//     <div className='container'>
//       <h6 className='card-title'>{itemSelected?.title}</h6>
//       <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
//       <div className='card-description'>
//         <p>{itemSelected?.description}</p>
//       </div>

//       <span>Stock: {stock}</span>
//       <p>{itemSelected?.price}</p>
    
//       <div>
//         <button onClick={additem}></button>
//         <button onClick={handleNavigation}>Terminar mi compra</button>
//         <Itemcount count={count} setCount={setCount} stock={stock} />
//       </div>
//     </div>
//   )
// }

// export default ItemDetail

import { useState } from 'react';
import './styles.css';
import Itemcount from '../ItemListContainer/Itemcount';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ itemSelected }) => {
  const { additem } = useContext(CartContext); // Move inside the component body
  const [count, setCount] = useState(0);
  const stock = useState(5);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/cart');
  };

  return (
    <div className='container'>
      <h6 className='card-title'>{itemSelected?.title}</h6>
      <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
      <div className='card-description'>
        <p>{itemSelected?.description}</p>
      </div>

      <span>Stock: {stock}</span>
      <p>{itemSelected?.price}</p>

      <div>
        <button onClick={additem()}></button>
        <button onClick={handleNavigation}>Terminar mi compra</button>
        <Itemcount count={count} setCount={setCount} stock={stock} />
      </div>
    </div>
  );
};

export default ItemDetail;

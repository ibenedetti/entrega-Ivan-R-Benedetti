import React, { useState } from 'react';
import './style.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial || 1);

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="ItemCount">
      <div>
        <button onClick={decrement}>
          -
        </button>
        <h4 style={{ display: 'inline-block' }}>
          {quantity}
        </h4>
        <button onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => onAdd(quantity)}
          disabled={!stock || !quantity || quantity > stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

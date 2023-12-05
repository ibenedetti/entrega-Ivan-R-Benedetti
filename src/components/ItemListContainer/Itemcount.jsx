import { useState } from 'react'


const Itemcount = () => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(5);

  const onAdd = () => {
    if (count === stock) return;
    setCount(count + 1);
  };
  const onSubstract = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return <div>
    <button onClick={onSubstract}>-</button>
    <span>{count}</span>
    <button onClick={onAdd}>+</button>
  </div>
}

export default Itemcount
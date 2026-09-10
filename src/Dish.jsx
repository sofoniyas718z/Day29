import { useState } from "react";

function Dish({ dish, onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    onAdd(dish.price);
  }

  return (
    <div className="dish">
      <h3>{dish.name}</h3>
      <p>{dish.category}</p>
      <p>{dish.price} ETB</p>

      <button onClick={handleAdd}>
        Add
      </button>

      <span> {count}</span>
    </div>
  );
}

export default Dish;
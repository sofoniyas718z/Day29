import { useState } from "react";
import { dishes } from "./data";
import CategoryBar from "./CategoryBar.jsx";
import DishList from "./DishList";
import OrderForm from "./OrderForm";

function Menu() {
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);

  const shown =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  function handleAdd(price) {
    setTotal(total + price);
  }

  return (
    <div>
      <h1>Addis Eats</h1>

      <CategoryBar
        selected={category}
        onSelect={setCategory}
      />

      <DishList
        dishes={shown}
        onAdd={handleAdd}
      />

      <h2>Total: {total} ETB</h2>

      <OrderForm />
    </div>
  );
}

export default Menu;
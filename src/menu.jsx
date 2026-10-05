import { useEffect, useRef, useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";
import { loadDishes } from "./api";

function Menu() {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const data = await loadDishes(category, controller.signal);

        setDishes(data);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      controller.abort();
    };
  }, [category]);

  function handleAdd(price) {
    setTotal(total + price);
  }

  if (loading) {
    return <p>Loading the menu...</p>;
  }

  if (error) {
    return <p className="err">{error}</p>;
  }

  if (dishes.length === 0) {
    return <p>No dishes yet.</p>;
  }

  return (
    <div>
      <h1>Addis Eats</h1>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search dishes..."
      />

      <CategoryBar
        selected={category}
        onSelect={setCategory}
      />

      <DishList
        dishes={dishes}
        onAdd={handleAdd}
      />

      <p>Total: {total} ETB</p>

      <OrderForm />
    </div>
  );
}

export default Menu;
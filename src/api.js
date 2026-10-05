export async function loadDishes(category, signal) {
  const url =
    category === "All"
      ? "/dishes.json"
      : `/dishes.json?category=${category}`;

  const res = await fetch(url, { signal });

  if (!res.ok) {
    throw new Error("Could not load the menu");
  }

  const dishes = await res.json();

  if (category === "All") {
    return dishes;
  }

  return dishes.filter((dish) => dish.category === category);
}
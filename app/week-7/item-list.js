import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  // Sorting by Name
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Sorting by Category
  else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <main className="p-5">
      <div className="flex flex-row gap-4 justify-center text-lg font-sans font-semibold text-white">
        <p>Sort by:</p>

        <button
          onClick={() => {
            setSortBy("name");
          }}
          style={{ backgroundColor: sortBy === "name" ? "#0059b3" : " " }}
          className="bg-cyan-500 pb-2 w-40 h-8 shadow-md rounded-md"
        >
          Name
        </button>

        <button
          onClick={() => {
            setSortBy("category");
          }}
          style={{ backgroundColor: sortBy === "category" ? "#0059b3" : " " }}
          className="bg-cyan-500 pb-2 w-40 h-8 shadow-md rounded-md"
        >
          Category
        </button>
      </div>

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </main>
  );
}

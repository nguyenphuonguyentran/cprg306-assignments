"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="bg-center bg-cover bg-gradient-to-r from-cyan-700 to-violet-200">
      <h1 className="p-5 text-7xl text-transparent font-bold font-sans bg-clip-text bg-gradient-to-r from-slate-200 to-white justify-center items-center flex">
        Shopping List
      </h1>
      <div className="flex flex-col justify-center items-center">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}

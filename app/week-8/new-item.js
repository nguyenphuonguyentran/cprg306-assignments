"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    let item = { id, name, quantity, category };
    console.log(item);

    onAddItem(item);
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <form
      className="flex flex-col gap-2 bg-gradient-to-r from-cyan-700 to-violet-200 mt-10 rounded-xl"
      onSubmit={(event) => handleSubmit(event)}
    >
      <input
        id="name"
        type="text"
        value={name}
        placeholder="Item name"
        onChange={(e) => setName(e.target.value)}
        required
        className="text-slate-500 w-30 h-10 rounded-md ml-5 mt-5 mr-5 shadow-md"
      />

      <div className="flex flex-row">
        <div className="bg-gradient-to-tr from-white to-slate-200 flex flex-row gap-6 rounded-xl m-5 w-40 h-15 items-center justify-center">
          <p className="text-black font-sans font-semibold ml-3">{quantity}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity == 1}
              className="bg-blue-400 disabled:bg-gray-500 focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 shadow-lg rounded-xl mb-2 mt-2 w-10 h-8 "
            >
              -
            </button>
            <button
              type="button"
              onClick={increment}
              disabled={quantity == 20}
              className="bg-blue-400 disabled:bg-gray-500 focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 shadow-lg rounded-xl mb-2 mt-2 w-10 h-8 "
            >
              +
            </button>
          </div>
        </div>

        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-slate-500 w-50 h-14 rounded-md mr-5 mt-6 mb-6 shadow-md"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <input
        type="submit"
        value="+"
        className="m-2 bg-blue-400 hover:bg-blue-500 focus:ring-2 focus:ring-blue-300 w-30 h-10 rounded-md font-bold text-white shadow-md ml-5 mr-5 mb-5"
      />
    </form>
  );
}

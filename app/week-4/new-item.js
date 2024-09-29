"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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
    <div class="bg-gradient-to-tr from-white to-slate-200 flex flex-row gap-6 rounded-xl m-10 w-40 h-15 items-center justify-center">
      <p class="text-black font-sans font-semibold ml-3">{quantity}</p>
      <div class="flex gap-2">
        <button
          onClick={decrement}
          disabled={quantity == 1}
          class="bg-blue-400 disabled:bg-gray-500 focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 shadow-lg rounded-xl mb-2 mt-2 w-10 h-8 "
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity == 20}
          class="bg-blue-400 disabled:bg-gray-500 focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 shadow-lg rounded-xl mb-2 mt-2 w-10 h-8 "
        >
          +
        </button>
      </div>
    </div>
  );
}

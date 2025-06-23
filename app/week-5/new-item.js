"use client";
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
    <div className="flex items-center space-y-4 bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto mt-10">
      <p className="text-lg font-medium text-blue-500">Quantity: <span className="text-green-500">{quantity}</span></p>

      <div className="space-x-4" style={{marginLeft: "200px"}}>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-md text-white ${
            quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          -
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-md text-white ${
            quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}

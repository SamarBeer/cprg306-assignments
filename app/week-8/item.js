import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={() => onSelect && onSelect(name)}
      className="cursor-pointer p-3 border rounded hover:bg-gray-100"
    >
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-600">
        {quantity} × {category}
      </div>
    </div>
  );
}


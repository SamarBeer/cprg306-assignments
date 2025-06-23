"use client";
import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  let sortedItems = [...itemsData];
  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div className="bg-white text-black rounded-xl shadow-md p-6 max-w-2xl mx-auto mt-6">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setSortBy('name')}
          className={`px-5 py-2 font-semibold rounded-md transition duration-200 ${
            sortBy === 'name'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-black hover:bg-gray-200'
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-5 py-2 font-semibold rounded-md transition duration-200 ${
            sortBy === 'category'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-black hover:bg-gray-200'
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

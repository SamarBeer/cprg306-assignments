'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="text-black w-full md:w-1/2">
      <div className="mb-4">
        <label className="mr-2 font-medium">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Item {...item} onSelect={onItemSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
}

'use client';

import { useState } from 'react';
import NewItem from './week-8/new-item';
import ItemList from './week-8/item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const handleItemSelect = (rawName) => {
    // Clean name: remove emojis and extra descriptions
    const clean = rawName
      .split(',')[0]
      .replace(/[^\p{L}\p{N}\s]/gu, '') // removes emojis and punctuation
      .trim()
      .toLowerCase();

    setSelectedItemName(clean);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white shadow-md rounded-lg p-6 text-black">
          <h1 className="text-3xl font-bold mb-4 text-center">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <hr className="my-6" />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

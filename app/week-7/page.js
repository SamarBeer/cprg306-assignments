'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 text-black">
        <h1 className="text-3xl font-bold mb-6 text-center">My Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <hr className="my-6" />
        <ItemList items={items} />
      </div>
    </main>
  );
}

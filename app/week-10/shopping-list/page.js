'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '.././_services/shopping-list-service';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/week-9');
    }
  }, [user, router]);

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    };
    loadItems();
  }, [user]);

  const handleAddItem = async (item) => {
    if (user) {
      const id = await addItem(user.uid, item);
      setItems((prev) => [...prev, { ...item, id }]);
    }
  };

  const handleItemSelect = (rawName) => {
    const clean = rawName
      .split(',')[0]
      .replace(/[^\p{L}\p{N}\s]/gu, '')
      .trim()
      .toLowerCase();
    setSelectedItemName(clean);
  };

  if (!user) return null;

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

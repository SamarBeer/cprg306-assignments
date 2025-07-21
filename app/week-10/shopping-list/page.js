'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (!user) {
      router.push('/week-9');
    } else {
      loadItems();
    }
  }, [user]);

  const loadItems = async () => {
    try {
      const data = await getItems(user.uid);
      setItems(data);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!name || !quantity || !category) return;

    const newItem = { name, quantity, category };
    try {
      const id = await addItem(user.uid, newItem);
      setItems((prev) => [...prev, { id, ...newItem }]);
      setName('');
      setQuantity('');
      setCategory('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping List</h1>

      <form onSubmit={handleAddItem} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> – {item.quantity} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

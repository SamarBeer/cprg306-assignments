'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../_utils/auth-context';

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Redirect to landing page if not logged in
      router.push('/week-9');
    }
  }, [user, router]);

  if (!user) {
    return <p>Redirecting to login...</p>; // Optional loading message
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping List</h1>
      <p>This is your protected shopping list page.</p>
      {/* Your actual shopping list UI can go here */}
    </div>
  );
}
